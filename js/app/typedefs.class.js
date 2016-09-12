import g from './globals';
import MatreshkaArray from 'matreshka/array';
import $ from 'balajs';
import Typedef from './typedef.class';
import { className } from 'matreshka/binders';

export default class extends MatreshkaArray {
	Model = Typedef;
	constructor() {
		super()
			.restore('article[data-typedef]')
			.bindNode('sandbox', 'body')
			.bindNode('overlay', '.typedef-overlay', className('!hide'))
			.bindNode('overlayOpaque', ':bound(overlay)', {
				setValue: function(v) {
					this.style.opacity = v ? .5 : 0;
				}
			})
			.on('click::([data-type])', function(evt) {
				this.forEach(function(typedef) {
					typedef.isShown = typedef.typedef === evt.target.getAttribute('data-type');
				});
			})
			.on('@change:isShown', function(evt) {
				if (evt.value) {
					if (this.shown) {
						this.shown.isShown = false;
					}

					this.overlay = true;

					this.overlayOpaque = false;

					this.delay(function() {
						this.overlayOpaque = true;
					});

					this.shown = evt.self;
				}
			})
			.on('click::overlay @click::(.close-modal)', this.close);

		g.app.on('keydown::sandbox', function(evt) {
			if (evt.which === 27) {
				this.close();
			}
		}, this);
	}

	close() {
		this.overlayOpaque = false;

		this.once('transitionend::overlay', function() {
			this.overlay = false;
		});

		if (this.shown) {
			this.shown.isShown = false;
		}

		this.shown = null;
	}
}
