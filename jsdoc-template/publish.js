"use strict";
const fs = require('jsdoc/fs');
const outdir = env.opts.destination;
const template = require('jsdoc/template');
const mdParser = require('marked');
const localizations = require('./localizations');
const parseExample = require('./parse-example');

exports.publish = function(data, opts) {
	var origData = data().get(),
		variation = 0,
		result = {
			classes: {},
			typedefs: [],
			binders: null
		};

	origData.forEach(function(item, index) {
		delete item.meta;
		delete item.___id;
		delete item.___s;
		delete item.tags;

		if (item.kind == 'class') {
			result.classes[item.longname] = item;

			item.staticMembers = {
				member: [],
				'function': []
			};

			item.instanceMembers = {
				member: [],
				'function': []
			};
		}

		if (index && item.name === origData[index - 1].name) {
			variation++;
			origData[index - variation]
				&& (origData[index - variation].variations = origData[index - variation].variations || []).push(item);
		} else {
			variation = 0;
		}


		if (item.kind == 'typedef') {
			result.typedefs.push(item);
			if(item.properties) {
				item.properties.forEach((property) => {
					property.description = mdParser(property.description);
				});
			}
		}

		item.see = item.see || [];
		item.properties = item.properties || [];

		item.description = mdParser(resolveLinks(item.description || item.classdesc || '').replace(/&quot;/g, '"'));

		item.summary = mdParser(resolveLinks(item.summary || ''));

		item.examples = (item.examples || []).map(parseExample);

		if (item.name === 'binders') {
			result.binders = item;
			item.members = [];
		}

		resolveAllLinks(item);

		item.summary_plain = (item.summary || '').replace(/(<([^>]+)>)/ig, "");
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
					item.description = mdParser(resolveLinks(item.description || '').replace(/&quot;/g, '"'));
				})
			}
		}

		if (item.memberof === 'Matreshka.binders') {
			result.binders.members.push(item);

			item.params = item.params || item.properties || [];
			item.params.forEach(function(item) {
				item.description = mdParser(resolveLinks(item.description || '').replace(/&quot;/g, '"'));
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
		_class.instanceMembers['function'].sort(sortFunction);
		_class.staticMembers.member.sort(sortFunction);
		_class.staticMembers['function'].sort(sortFunction);
	}

	// resorting classes
	var classes = {
		'Matreshka': result.classes['Matreshka'],
		'Matreshka.Object': result.classes['Matreshka.Object'],
		'Matreshka.Array': result.classes['Matreshka.Array']
	};

	result.classes = classes;

	fs.writeFileSync(env.opts.destination + '/doc_menu.html', view.render('menu.html', result), 'utf8');
	fs.writeFileSync(env.opts.destination + '/doc_content.html', view.render('content.html', result), 'utf8');
};

function resolveLinks(text) { //{@link #typedef-binder}
	return text
		.replace(/{@link\s+#typedef-([A-Za-z]+)\s*}/g, function(_, type) {
			return '<span data-type="' + type + '">' + type + '</span>';
		})
		.replace(/{@link\s+(\S+)\s*([\$A-zА-я .-]*)}/g, function(_, member, text) {

			return ~member.indexOf('http')
				? '<a href="' + member + '" target="_blank">' + (text || member) + '</a>'
				: '<a href="#!' + member.replace(/#/g, '-') + '">' + (text || member) + '</a>';
		});
}

function resolveAllLinks(obj) {
	if (obj)
		for (let i in obj) {
			obj[i] = typeof obj[i] === 'string' ? resolveLinks(obj[i]) : obj[i];
			obj[i] = typeof obj[i] === 'object' ? resolveAllLinks(obj[i]) : obj[i];
		}

	return obj;
}
