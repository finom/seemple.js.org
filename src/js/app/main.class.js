import g from './globals';
import {Matreshka as MK, balalaika as $} from '../matreshka';
import Articles from './articles.class';
import Typedefs from './typedefs.class';
import Typo from './typo.class';
import Notifier from './notifier.class';
import Search from './search.class';
import Performance from './performance.class';
import Examples from './examples.class';
import headerHider from '../lib/header-hider';
import prettify from '../lib/prettify';
import embed from '../lib/embed-jsbin';
import _dp from '../lib/details-polyfill';

export default class Main extends MK.Object {
	constructor() {
		g.app = super();

		this
			.bindings()
			.events()
			.set({
				ieVersion: document.documentMode,
				isOldIE: document.documentMode <= 9,
				view: localStorage.view || 'all',
				version: localStorage.version || 'stable',
				unstableVersion: '1.4',
				newVersions: ['1.1', '1.2', '1.3'],
				hideTypoBadge: localStorage.hideTypoBadge,
				isMobile: /mobile|android/i.test(navigator.userAgent),
			})
			.setClassFor({
				typo: Typo,
				notifier: Notifier,
				search: Search,
				performance: Performance,
				articles: Articles,
				typedefs: Typedefs,
				examples: Examples
			});

		if (location.hash) {
			// looks stupid but it forces chrome correctly work with :target selector
			location.href = location.href;
		}

		// move to the hashbang url structure
		if (/#\w.*/.test(location.hash) && $(`[id="!${location.hash.replace('#', '')}"]`).length) {
			location.hash = '!' + location.hash.replace('#', '');
		}

		location.hash = location.hash || '!home';

		if (~location.hash.indexOf('comments')) {
			 // #!/matreshka/comments/matreshka-ru%23matreshka::unread
			 // #!/matreshka/comments/matreshka-ru:matreshka-bindnode::unread
			var threadID = location.hash.replace(/#!\/matreshka\/comments\/matreshka-\S{2}(?:%23|:)(.*)::unread/, '$1').toLowerCase(),
				commentArticle,
				commentsContainer;

			for (var i = 0; i < this.articles.length; i++) {
				if (~this.articles[i].id.toLowerCase().replace(/\./g, '').indexOf(threadID)) {
					commentArticle = this.articles[i];
					commentsContainer = commentArticle.bound('commentsContainer');
					break;
				}
			}

			if (commentArticle && commentsContainer) {
				location.hash = commentArticle.id;
				commentsContainer.classList.add('muut');
				commentArticle.commentsShown = true;
				this.muut();
			}
		}

		/*if (~location.hash.indexOf('&')) {
			 //#!Matreshka-nodes&st_refDomain=www.facebook.com&st_refQuery=/
			let threadID = location.hash.replace(/#([^&]+)&.* /, '$1').toLowerCase(),
				article;

			for (let i = 0; i < this.articles.length; i++) {
				if (~this.articles[i].id.toLowerCase().indexOf(threadID)) {
					commentArticle = this.articles[i];
					break;
				}
			}

			if (commentArticle) {
				location.hash = commentArticle.id;
			}
		}*/

		// have no time to make it work in tamplete, so let's shitcode!
		for(let a of $('a')) {
			let href = a.getAttribute('href');
			if(href && href.indexOf('http') == 0) {
				a.target = '_blank';
			}
		}

		this.initDynamicStyles();

		// in ie10 code snippets are inlined
		if(document.documentMode <= 10) {
			for(let snippet of $('pre code')) {
				snippet.innerHTML = snippet.innerHTML.replace(/\n/g, '<br>');
			}
		}

		prettyPrint();

		this.loading = false;
	}

	initDynamicStyles() {
		let styleSheet = document.styleSheets[0];

		styleSheet.insertRule(`body[data-version="stable"]
			[data-since="${this.unstableVersion}"] {
				display: none;
			}`, styleSheet.cssRules.length);

		styleSheet.insertRule(`article[data-since="${this.unstableVersion}"]:before {
				content: '\\26A0   New since ${this.unstableVersion}';
				color: #ef5350;
			}`, styleSheet.cssRules.length);

		styleSheet.insertRule(`nav a[data-since="${this.unstableVersion}"]:after {
				content: '\\26A0';
				color: #ef5350;
			}`, styleSheet.cssRules.length);

		return this;
	}

	bindings() {
		return this
			.bindNode({
				sandbox: 'body',
				win: window,
				typeBadge: ':sandbox .typo-badge',
				viewSwitcher: 'nav .view-switcher',
				versionSwitcher: 'nav .version-switcher',
				navShown: ['body', MK.binders.className('nav-shown')],
				isMobile: [':sandbox', MK.binders.className('mobile')],
				loading: ['.loader', MK.binders.className('!hide')],
				navOverlay: ['.nav-overlay', MK.binders.className('!hide')],
				hideTypoBadge: [':bound(typeBadge)', MK.binders.className('hide')],
				htmlTitle: ['head title', MK.binders.innerHTML()],
				isOldIE: [':bound(viewSwitcher)', MK.binders.visibility(false)],
				hashValue: [':sandbox .another-language', {
					setValue: function(v) {
						this.href = this.href.split('#')[0] + '#' + v;
					}
				}],
				version: [':sandbox', {
					setValue(v) {
						this.setAttribute('data-version', v);
					}
				}],
				mainTitle: ['title', {
					getValue: function() {
						return this.innerHTML;
					}
				}],
				view: ['body', MK.binders.dataset('view')]
			})
			.bindNode({
				hashValue: [window, {
					on: 'hashchange',
					getValue: function() {
						return location.hash.replace('#', '');
					}
				}]
			})
			.bindNode({
				view: ':bound(viewSwitcher)',
				version: ':bound(versionSwitcher)'
			}, {
				on: 'click',
				getValue: function() {
					return this.querySelector('.checked').getAttribute('data-value');
				},
				setValue: function(v) {
					MK.$b(this.children).forEach(function(item) {
						item.classList.toggle('checked', item.getAttribute('data-value') === v);
					});
				},
				initialize: function() {
					this.addEventListener('mousedown', function(evt) {
						if (evt.target !== this) MK.$b(this.children).forEach(function(item) {
							item.classList.toggle('checked', evt.target === item);
						});
					});
				}
			});
	}

	events() {
		return this
			.onDebounce('scroll::win', function() {
				if (this.view === 'all') {
					var fromTop = window.pageYOffset,
						fromLeft = window.pageXOffset,
						cur = this.articles.filter(article => {
							return (article.since !== this.unstableVersion || this.version == 'unstable') && article.sandbox.offsetTop < fromTop + 50;
						}),
						hash;

					cur = cur[cur.length - 1];

					hash = cur ? cur.id : "";

					if (this.hashValue != hash) {
						this.hashValue = hash;
						if (window.history && history.pushState) {
							history.pushState(null, null, '#' + hash);
						} else {
							location.hash = hash;
							scrollTo(fromLeft, fromTop);
						}
					}
				}
			}, 200)
			.on({
				'change:view': evt => {
					if(!this.articles) return;
					var fromLeft = window.pageXOffset,
						fromTop;

					localStorage.view = this.view;

					if (this.view === 'all') {
						fromTop = this.articles.active ? this.articles.active.bound().offsetTop : 0;
					} else {
						fromTop = 0;
					}

					scrollTo(fromLeft, fromTop);
				},
				'change:version': evt => localStorage.version = this.version,
				'click::(.show-nav)': evt => {
					this.navOverlay = true;

					this.delay(function() {
						this.navShown = true;
					});
				},
				'click::navOverlay': evt => {
					this.once('transitionend::navOverlay', evt => this.navOverlay = false);
					this.navShown = false;
				},
				'click::([href*="jsbin.com"][href*="edit"])': evt => {
					if (evt.target.classList.contains('embedded')) {
						evt.target.nextSibling.classList.toggle('hide');
					} else {
						embed(evt.target);
					}

					evt.preventDefault();
				},
				'click::typeBadge(.close)': evt => localStorage.hideTypoBadge = this.hideTypoBadge = true
			});
	}

	muut() {
		var script;
		if (typeof jQuery === 'undefined' || !jQuery.fn.muut) {
			document.body.appendChild($.create('script', {
				src: '//cdn.muut.com/1/moot.min.js'
			}));
		} else {
			jQuery('.muut').muut();
		}
	}
}
