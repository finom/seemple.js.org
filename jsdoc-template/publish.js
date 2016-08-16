"use strict";
var fs = require('jsdoc/fs'),
	outdir = env.opts.destination,
	template = require('jsdoc/template'),
	mdParser = require('jsdoc/util/markdown').getParser(),
	important = 'Matreshka Matreshka#on Matreshka#bindNode Matreshka#set Matreshka#trigger Matreshka.Object Matreshka.Object#toJSON Matreshka.Object#jset Matreshka.Array Matreshka.Array#Model Matreshka.Array#itemRenderer Matreshka.Array#METHOD Matreshka.Array#METHOD_'.split(/\s+/),
	cool = 'Matreshka#bindNode Matreshka#linkProps Matreshka#mediate Matreshka#on Matreshka#setClassFor Matreshka.Array#itemRenderer'.split(/\s+/);

exports.publish = function(data, opts) {
	var origData = data().get(),
		variation = 0,
		result = {
			globals: [],
			classes: {},
			typedefs: [],
			binders: null
		},
		docPath = origData[0].meta.path + '/../md';

	origData.forEach(function(item, index) {
		delete item.meta;
		delete item.___id;
		delete item.___s;
		delete item.tags;

		item.important = !!~important.indexOf(item.longname.replace(/\(.*\)/, ''));
		item.cool = !!~cool.indexOf(item.longname.replace(/\(.*\)/, ''));

		if (item.kind == 'class' && item.longname !== "Class.Interface") {
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
		} else if (item.scope == 'global' && item.name !== 'Matreshka') {
			result.globals.push(item);
		}

		item.see = item.see || [];
		item.properties = item.properties || [];

		item.description = mdParser(resolveLinks(item.description || item.classdesc || '').replace(/&quot;/g, '"'));

		item.summary = mdParser(resolveLinks(item.summary || ''));

		item.examples = (item.examples || []).map(function(example) {
			var execResult;
			if (execResult = /<caption>([\s\S]*)<\/caption>([\s\S]+)/.exec(example)) {
				var header = mdParser(execResult[1]);
				var code = execResult[2]
			} else {
				header = '';
				code = example;
			}

			return {
				header: header,
				code: code.replace(/^\s+/, '').replace(/</g, '&lt;')
			};
		});

		if (item.name === 'binders') {
			result.binders = item;
			item.members = [];
		}

		resolveAllLinks(item);

		item.summary_plain = (item.summary || '').replace(/(<([^>]+)>)/ig, "");
		item.importance = item.comment && /[\s\S]+@importance\s+(\d+)[\s\S]+/.exec(item.comment);//.replace(/[\s\S]+@importance\s+([a-z]+)\s[\s\S]+/g, '$1') : null;
		item.importance = item.importance ? item.importance[1] : null;
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



	//result.intro = wrapArticles(fs.readFileSync(docPath + '/intro.md', 'utf8'));
	//result.end = wrapArticles(fs.readFileSync(docPath + '/end.md', 'utf8'));

	var templatePath = opts.template,
		view = new template.Template(templatePath + '/tmpl');

	fs.mkPath(outdir);

	view.langName = result.classes.Matreshka.comment.replace(/[\s\S]+@lang\s+([a-z]+)\s[\s\S]+/g, '$1');

	view.lang = {
		en: {
			'class': 'Class',
			method: 'Method',
			property: 'Property',
			namespace: 'Namespace',
			arguments: 'Arguments',
			properties: 'Properties',
			examples: 'Examples',
			name: 'Name',
			type: 'Type',
			'default': 'Default',
			details: 'Details',
			returns: 'Returns',
			fires: 'Fires',
			comments: 'ASK A QUESTION',
			important: 'Important',
			see: 'Links',
			cool: 'Cool method or property',
			since: 'Available since',
			methods: 'Methods',
			properties: 'Properties',
			static_methods: 'Static Methods',
			static_properties: 'Static Props'
		},
		ru: {
			'class': 'Класс',
			method: 'Метод',
			property: 'Свойство',
			namespace: 'Пространство имен',
			arguments: 'Аргументы',
			properties: 'Свойства',
			examples: 'Примеры',
			name: 'Имя',
			type: 'Тип',
			'default': 'По&nbsp;умолчанию',
			details: 'Описание',
			returns: 'Возвращает',
			fires: 'Генерирует события',
			comments: 'Задать вопрос',
			important: 'Важно',
			see: 'Ссылки',
			cool: 'Крутой метод или свойство',
			since: 'Добавлено в версии',
			methods: 'Методы',
			properties: 'Свойства',
			static_methods: 'Статичные методы',
			static_properties: 'Статичные свойства'
		}
	}[view.langName];

	for(var className in result.classes) {
		var _class = result.classes[className];
		var sortFunction = function(a, b) {
			//console.log(a.longname);
			return a.longname < b.longname ? -1 : 1;
		};

		_class.instanceMembers.member = _class.instanceMembers.member.sort(sortFunction);
		_class.instanceMembers['function'] = _class.instanceMembers['function'].sort(sortFunction);
		_class.staticMembers.member = _class.staticMembers.member.sort(sortFunction);
		_class.staticMembers['function'] = _class.staticMembers['function'].sort(sortFunction);

	}

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


function wrapArticles(text) {
	return resolveLinks(text
		.split('=======').map(function(article) {
			if(!article) return '';
			let ex = /\(\(\(([\s\S]+)\)\)\)([\s\S]+)/.exec(article),
				attrs,
				attrsStr = '',
				json;

			if (ex) {
				json = ex[1];
				article = ex[2];
				attrs = JSON.parse('{' + json + '}')
			} else {
				attrs = {};
			}

			for (let i in attrs) {
				attrsStr += ' ' + i + '="' + attrs[i] + '"';
			}

			article = mdParser(article)
				.replace(/\[\[/g, '<')
				.replace(/\]\]/g, '>');

			article = '<article' + attrsStr + '>' + article + '</article>';
			article = article.replace(/&quot;/g, '"');

			return article;
		})
		.join(''));
}
