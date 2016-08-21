"use strict";
const fs = require('jsdoc/fs');
const outdir = env.opts.destination;
const template = require('jsdoc/template');
const mdParser = require('marked');
const localizations = require('./localizations');
const parseExample = require('./parse-example');
const resolveLinksRecursively = require('./resolve-links-recursively');

module.exports.publish = function(data, opts) {
	const origData = data().get();
	const result = {
		classes: {},
		typedefs: [],
		binders: null
	};
	let variation = 0;

	origData.forEach(function(item, index) {
		delete item.meta;
		delete item.___id;
		delete item.___s;
		delete item.tags;

		if (item.kind == 'class') {
			result.classes[item.longname] = item;

			item.staticMembers = {
				member: [],
				function: []
			};

			item.instanceMembers = {
				member: [],
				function: []
			};
		}

		if (index && item.name === origData[index - 1].name) {
			variation++;
			origData[index - variation]
				&& (origData[index - variation].variations = origData[index - variation].variations || []).push(item);
		} else {
			variation = 0;
		}

		resolveLinksRecursively(item);

		if (item.kind === 'typedef') {
			result.typedefs.push(item);
			if(item.properties) {
				item.properties.forEach((property) => {
					property.description = mdParser(property.description);
				});
			}
		}

		item.see = item.see || [];
		item.properties = item.properties || [];

		item.description = item.description || item.classdesc || '';
		item.description = mdParser(item.description.replace(/&quot;/g, '"'));

		item.summary = item.summary ? mdParser(item.summary) : '';

		item.examples = item.examples ? item.examples.map(parseExample) : [];

		if (item.name === 'binders') {
			result.binders = item;
			item.members = [];
		}

		// getting rif od HTML
		item.summary_plain = item.summary ? item.summary.replace(/(<([^>]+)>)/ig, "") : '';
	});

	result.classes.Matreshka.binders = result.binders;

	origData.forEach(function(item) {
		var _class,
			members;
		if (_class = result.classes[item.memberof]) {
			members = _class[item.scope + 'Members'] = _class[item.scope + 'Members'] || {};
			if (item.kind !== 'class') {
				(members[item.kind] = members[item.kind] || []).push(item);
				item.params = item.params || item.properties || [];
				item.params.forEach(function(item) {
					item.description = mdParser((item.description || '').replace(/&quot;/g, '"'));
				})
			}
		}

		if (item.memberof === 'Matreshka.binders') {
			result.binders.members.push(item);

			item.params = item.params || item.properties || [];
			item.params.forEach(function(item) {
				item.description = mdParser((item.description || '').replace(/&quot;/g, '"'));
			});
		}
	});

	var templatePath = opts.template,
		view = new template.Template(templatePath + '/tmpl');

	fs.mkPath(outdir);

	view.lang = localizations[result.classes.Matreshka.lang];

	for(var className in result.classes) {
		var _class = result.classes[className];
		var sortFunction = function(a, b) {
			return a.longname < b.longname ? -1 : 1;
		};

		_class.instanceMembers.member.sort(sortFunction);
		_class.instanceMembers.function.sort(sortFunction);
		_class.staticMembers.member.sort(sortFunction);
		_class.staticMembers.function.sort(sortFunction);
	}

	// resorting classes
	result.classes = {
		'Matreshka': result.classes['Matreshka'],
		'Matreshka.Object': result.classes['Matreshka.Object'],
		'Matreshka.Array': result.classes['Matreshka.Array']
	};

	fs.writeFileSync(env.opts.destination + '/doc_menu.html', view.render('menu.html', result), 'utf8');
	fs.writeFileSync(env.opts.destination + '/doc_content.html', view.render('content.html', result), 'utf8');
};
