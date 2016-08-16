import g from './globals';
import {Matreshka as MK, balalaika as $} from 'matreshka';

export default class extends MK.Object {
	constructor() {
		super()
			.set({
				formURL: '//docs.google.com/forms/d/1hxQBT5pyq5tLLWH0dWFtwUSLocFC3zxqb9eDJa9p_jE/formResponse',
				typeName: 'entry.1972481987',
				textName: 'entry.1777335671',
				pageName: 'entry.339184258'
			})
			.bindNode('sandbox', 'form.notification-form')
			.bindNode({
				type: ':sandbox input.type',
				text: ':sandbox input.text',
				page: ':sandbox input.page'
			})
			.bindNode({
				typeName: ':bound(type)',
				textName: ':bound(text)',
				pageName: ':bound(page)',
			}, {
				on: null,
				getValue: null,
				setValue: function(v) {
					this.name = v;
				}
			})
			.bindNode('formURL', ':sandbox', {
				setValue: function(v) {
					this.action = v;
				}
			});
	}

	notify(type, text) {
		this.type = type;
		this.text = text;
		this.page = location.href;
		this.bound('sandbox').submit();
	}
}
