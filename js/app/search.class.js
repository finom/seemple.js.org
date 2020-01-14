import g from './globals';
import SeempleArray from 'seemple/array';
import SeempleObject from 'seemple/object';
import $ from 'balajs';
import { className, html } from 'seemple/binders';

export default class extends SeempleArray {
	Model = SeempleObject;
	itemRenderer = '<li>';
	constructor(data) {
		var UP_KEY = 38,
			DOWN_KEY = 40,
			TAB_KEY = 9,
			ENTER_KEY = 13;

		super()
			.set(data)
			.bindNode({
				sandbox: 'header',
				container: ':sandbox .search-results-dropdown',
				search: ':sandbox .search',
				searchMode: {
					node: ':sandbox',
					binder: className('search-mode')
				}
			})
			.on({
				'click::(.show-search)': evt => {
					this.searchMode = true;
					this.nodes.search.focus();
				},
				'click::(.back)': evt => {
					this.searchMode = false;
					this.search = '';
				},
				'*@render': evt => {
					evt.self
						.bindNode('header', ':sandbox', html())
						.bindNode('isActive', ':sandbox', className('active'));
				},
				'*@click::sandbox': evt => {
					this.searchMode = false;
					this.search = '';
					document.location.hash = this.active.id;
				},
				'*@mouseover::sandbox': evt => {
					this.forEach(function(item) {
						item.isActive = item === evt.self;
					});
				},
				'keydown::search': evt => {
					var activeIndex;
					if (this.length) {
						if (evt.which === UP_KEY || evt.which === DOWN_KEY) {
							activeIndex = this.indexOf(this.active);

							if (evt.which === UP_KEY) {
								activeIndex = activeIndex - 1;
							} else if (evt.which === DOWN_KEY) {
								activeIndex = activeIndex + 1;
							}

							activeIndex = activeIndex < 0 ? this.length + activeIndex : activeIndex;
							activeIndex %= this.length;

							this.forEach(function(item, index) {
								console.log(index, index === activeIndex)
								item.isActive = index === activeIndex;
							});

							evt.preventDefault();
						} else if (evt.which === ENTER_KEY) {
							document.location.hash = this.active.id;
							this.search = '';
							this.searchMode = false;
						}
					}
				},
				'*@change:isActive': evt => {
					this.active = evt.self.isActive ? evt.self : this.active;
				},
				'change:search': evt => {
					var search = this.search;
					if (search) {
						search = search.toLowerCase();
						this.recreate(g.app.articles
							.toJSON(false)
							.filter(function(article) {
								search.toLowerCase()
								return ~article.name.toLowerCase().indexOf(search) ||
									~article.id.toLowerCase().indexOf(search);
							}).map(function(article) {
								return {
									header: article.header,
									name: article.name,
									article: article,
									id: article.id
								};
							})
							.slice(0, 5));

						if (this.length) {
							this[0].isActive = true;
						}
					} else {
						this.recreate();
					}
				}
			});
	}
}
