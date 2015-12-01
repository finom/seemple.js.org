import g from './globals';
import {Matreshka as MK, balalaika as $} from '../matreshka';

export default class Article extends MK.Object {
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
					var node = this.bound('menuItem');
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
						commentsContainer = this.bound('commentsContainer');

					if (this.commentsShown = !this.commentsShown) {
						commentsContainer.classList.add('muut');
						g.app.muut();
					}
				},
				'click::(.share-facebook)': evt => {
					let url = `http://www.facebook.com/dialog/feed?app_id=901572946532005&link=${encodeURIComponent(location.href)}&name=${this.name}&description=${this.summary}&redirect_uri=${encodeURIComponent('http://matreshka.io/popupclose.html')}&display=popup&picture=${encodeURIComponent('http://matreshka.io/img/mk_logo.png')}`;

					window.open(url, 'Facebook', 'height=600,width=700');
				}, //
				'click::(.share-twitter)': evt => {
					let url = `https://twitter.com/intent/tweet?text=${encodeURIComponent('#matreshkajs ' + this.name +': ' + this.summary.substr(0, 60) + '...')}&url=${location.href}`;
					window.open(url, 'Twitter', 'height=600,width=700');
				}
			})
			.on('render change:expanded', function() {
				var submenu = this.bound('submenu');
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
			.linkProps('ieVersion', [g.app, 'ieVersion'])
			.linkProps('newVersions', [g.app, 'newVersions'])
			.linkProps('_previous', [
				this, 'previous',
				g.app, 'unstableVersion',
				g.app, 'version',
				g.app, 'articles',
				g.app, 'importanceLevel'
			], (previous, unstableVersion, version, articles, importanceLevel) => {
				if (!previous || !previous.importance || version == 'unstable' || !articles) {
					return previous;
				} else {
					do {
						if (previous.since != unstableVersion && previous.importance <= importanceLevel) { 
							return previous;
						}
					} while (previous = previous.previous)
				}
			})
			.linkProps('_next', [
				this, 'next',
				g.app, 'unstableVersion',
				g.app, 'version',
				g.app, 'articles',
				g.app, 'importanceLevel'
			], (next, unstableVersion, version, articles, importanceLevel) => {
				if (!next || !next.importance || version == 'unstable' || !articles) {
					return next;
				} else {
					do {
						if (next.since != unstableVersion && next.importance <= importanceLevel) {
							return next;
						}
					} while (next = next.next)
				}
			})
			.linkProps('previousId', '_previous', function(previous) {
				return previous ? previous.id : '';
			})
			.linkProps('nextId', '_next', function(next) {
				return next ? next.id : '';
			})
			.linkProps('previousHeader', '_previous', function(previous) {
				return previous ? previous.name : '';
			})
			.linkProps('nextHeader', '_next', function(next) {
				return next ? next.name : '';
			});
	}

	onRender() {
		var paginationHTML = g.app.select('#pagination-template').innerHTML;
		this.bindNode('id', ':sandbox', MK.binders.property('id'));

		if(!this.id) {
			return;
		}

		return this
			.bindNode({
				menuItem: 'nav a[href="#' + this.id + '"]',
				since: [':sandbox', MK.binders.dataset('since')],
				isActive: [':bound(menuItem)', MK.binders.className('active')],
				expanded: [':bound(menuItem)', MK.binders.className('expanded')],
				newVersions: [':sandbox', {
					setValue(v) {
						this.classList.toggle('new', ~v.indexOf(this.getAttribute('data-since')));
					}
				}]
			})
			.bindOptionalNode({
				commentsContainer: ':sandbox .comments-container',
				submenu: 'nav ul[data-submenu="' + this.id + '"]',
				comment: ':sandbox .comments',
				commentsShown: [':bound(commentsContainer)', MK.binders.visibility()],
				ieVersion: [':sandbox .comments', MK.binders.className('hide')],
				header: [':sandbox h2', {
					getValue: function() {
						return this.innerHTML.replace(/<wbr>/g, '');
					}
				}],
				summary: [':sandbox .summary p', MK.binders.innerText()],
				importance: [':sandbox', {
					getValue() {
						return +this.getAttribute('data-importance');
					}
				}]
			})
			.bindNode('pagination', [
				this.sandbox.insertBefore($(paginationHTML)[0], this.sandbox.firstChild),
				this.sandbox.appendChild($(paginationHTML)[0])
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
			}, MK.binders.innerHTML());
	}

}
