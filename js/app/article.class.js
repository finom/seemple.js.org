import g from './globals';
import SeempleObject from 'seemple/object';
import $ from 'balajs';
import { prop, dataset, html, display, className } from 'seemple/binders';

export default class Article extends SeempleObject {
	constructor(data) {
		super(data)
			.set('commentsShown', false)
			.events()
			.links()
	}

	events() {
		return this
			.on({
				'click::menuItem(.expand)': evt => {
					this.expanded = !this.expanded;
					evt.preventDefault();
				},
				'change:isActive': evt => {
					var node = this.nodes.menuItem;
					while (node = node.parentNode) {
						$('.submenu-wrapper').filter(function(wrapper) {
							return wrapper.contains(node);
						}).map(function(wrapper) {
							return wrapper.previousElementSibling;
						}).map(function(menuItem) {
							return menuItem.querySelector('.hidden-active-child');
						}).forEach(function(menuItem) {
							menuItem.innerHTML = this.isActive ? this.name : ''
						}, this);
						break;
					}
				},
				'click::comment': evt => {
					var url = document.location.origin + document.location.pathname + '#' + this.id,
						commentsContainer = this.nodes.commentsContainer;

					if (this.commentsShown = !this.commentsShown) {
						commentsContainer.classList.add('muut');
						g.app.muut();
					}
				}
			})
			.on('render change:expanded', function() {
				var submenu = this.nodes.submenu;
				if (submenu) {
					if (!this.expanded) {
						submenu.style.marginTop = -44 * this.selectAll(':bound(submenu) li').length + 'px';
					} else {
						submenu.style.marginTop = 0;
						submenu.style.display = 'block';
					}
				}
			}, true);
	}

	links() {
		return this
			.calc({
				_previous: {
					source: [{
						object: this,
						key: 'previous'
					}, {
						object: g.app,
						key: 'articles'
					}, {
						object: g.app,
						key: 'importanceLevel'
					}],
					handler: (previous, articles, importanceLevel) => {
						if (!previous || !previous.importance || !articles) {
							return previous;
						} else {
							do {
								if (previous.importance <= importanceLevel) {
									return previous;
								}
							} while (previous = previous.previous)
						}
					}
				},
				_next: {
					source: [{
						object: this,
						key: 'next'
					}, {
						object: g.app,
						key: 'articles'
					}, {
						object: g.app,
						key: 'importanceLevel'
					}],
					handler: (next, articles, importanceLevel) => {
						if (!next || !next.importance || !articles) {
							return next;
						} else {
							do {
								if (next.importance <= importanceLevel) {
									return next;
								}
							} while (next = next.next)
						}
					}
				},
				previousId: {
					source: '_previous',
					handler: function(previous) {
						return previous ? previous.id : '';
					}
				},
				nextId: {
					source: '_next',
					handler: function(next) {
						return next ? next.id : '';
					}
				},
				previousHeader: {
					source: '_previous',
					handler: function(previous) {
						return previous ? previous.name : '';
					}
				},
				nextHeader: {
					source: '_next',
					handler: function(next) {
						return next ? next.name : '';
					}
				}
			})
	}

	onRender() {
		var paginationHTML = g.app.select('#pagination-template').innerHTML;
		this.bindNode('id', ':sandbox', prop('id'));

		if(!this.id) {
			return;
		}

		return this
			.bindNode({
				menuItem: g.app.select('nav a[href="#' + this.id + '"]'),
				since: {
					node: ':sandbox',
					binder: dataset('since')
				},
				isActive: {
					node: ':bound(menuItem)',
					binder: className('active')
				},
				expanded: {
					node: ':bound(menuItem)',
					binder: className('expanded')
				}
			})
			.bindOptionalNode({
				commentsContainer: ':sandbox .comments-container',
				submenu: 'nav ul[data-submenu="' + this.id + '"]',
				comment: ':sandbox .comments',
				commentsShown: {
					node: ':bound(commentsContainer)',
					binder: display()
				},
				header: {
					node: ':sandbox h2',
					binder:  {
						getValue: function() {
							return this.innerHTML.replace(/<wbr>/g, '');
						}
					}
				},
				summary: {
					node: ':sandbox .summary p',
					binder: {
						getValue() {
							return this.textContent;
						}
					}
				},
				importance: {
					node: ':sandbox',
					binder: {
						getValue() {
							return +this.getAttribute('data-importance');
						}
					}
				}
			})
			.bindNode('pagination', [
				this.nodes.sandbox.insertBefore($(paginationHTML)[0], this.nodes.sandbox.firstChild),
				this.nodes.sandbox.appendChild($(paginationHTML)[0])
			])
			.bindNode('name', ':bound(menuItem)', {
				getValue: function() {
					return this.getAttribute('data-name') || this.textContent;
				}
			})
			.bindNode({
				nextId: ':bound(pagination) .next-page',
				previousId: ':bound(pagination) .previous-page'
			}, {
				setValue: function(v) {
					this.href = '#' + v;
				}
			})
			.bindNode({
				nextHeader: ':bound(pagination) .next-page',
				previousHeader: ':bound(pagination) .previous-page'
			}, html());
	}

}
