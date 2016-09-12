import g from './globals';
import MatreshkaArray from 'matreshka/array';
import $ from 'balajs';
import Article from './article.class';

export default class Articles extends MatreshkaArray {
	Model = Article;
	constructor() {
		super();

		this.restore('article:not([data-typedef])');

		this.forEach((article, index) => {
			article.previous = this[index - 1];
			article.next = this[index + 1];
		});

		this
			.bindNode('header', 'header .inner', MK.binders.innerHTML())
			.bindNode('win', window)
			.linkProps('hashValue', [g.app, 'hashValue'])
			.linkProps('header', 'active', function(active) {
				return active ? active.header || g.app.mainTitle : g.app.mainTitle;
			})
			.on({
				'change:hashValue': evt => {
					var active;
					for (var i = 0; i < this.length; i++) {
						if (this[i].id === this.hashValue) {
							active = this[i];
							break;
						}
					}
					if (this.active) {
						this.active.isActive = false;
					}

					if (this.active = active) {
						this.active.isActive = true;
					}
				},
				'change:active': evt => {
					g.app.htmlTitle = this.active ? `${this.active.name} - ${g.app.mainTitle}` : g.app.mainTitle;
				}
			}, true);
	}
}
