import g from './globals';
import {Matreshka as MK, balalaika as $} from 'matreshka';

export default class extends MK.Object {
	constructor() {
		super()
			.set({
				formURL: '//docs.google.com/forms/d/1lCplFvSZfwDU_zr4WsK0fSCo5ktBOnox0od_BPx40xk/formResponse',
				selectionName: 'entry.1972481987',
				commentName: 'entry.1777335671',
				pageName: 'entry.339184258'
			})
			.bindNode('sandbox', 'form.typo')
			.bindNode('shown', ':sandbox', MK.binders.className('shown'))
			.bindNode({
				selection: ':sandbox input.selection',
				comment: ':sandbox textarea.comment',
				page: ':sandbox input.page'
			})
			.bindNode({
				selectionName: ':bound(selection)',
				commentName: ':bound(comment)',
				pageName: ':bound(page)',
			}, {
				on: null,
				getValue: null,
				setValue: function(v) {
					this.name = v;
				}
			})
			.bindNode('overlay', '.typo-overlay', MK.binders.className('!hide'))
			.bindNode('overlayOpaque', ':bound(overlay)', {
				setValue: function(v) {
					this.style.opacity = v ? .5 : 0;
				}
			})
			.bindNode('formURL', ':sandbox', {
				setValue: function(v) {
					this.action = v;
				}
			})
			.bindNode('selection', ':sandbox p.selection', MK.binders.innerHTML())
			.on('submit::sandbox', function(evt) {
				this.shown = false;
			})
			.on('change:shown', function(evt) {
				if (evt.value) {
					this.overlay = true;
					this.delay(function() {
						this.overlayOpaque = true;
					});
				} else {
					this.overlayOpaque = false;

					this.once('transitionend::overlay', function() {
						this.overlay = false;
					});
				}
			})
			.on('click::overlay click::(.cancel) click::(.close-modal)', function(evt) {
				this.shown = false;
				evt.preventDefault();
			});

		g.app.on('keydown::sandbox', function(evt) {
			if (13 === evt.which && (evt.domEvent.ctrlKey || evt.domEvent.metaKey)) {
				var selectionText = window.getSelection().toString();
				if (selectionText) {
					this.comment = '';
					this.selection = selectionText;
					this.page = location.href;
					this.shown = true;
				}
			}

			if (evt.which === 27) {
				this.shown = false;
			}
		}, this);
	}
}
