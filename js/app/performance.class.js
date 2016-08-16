import g from './globals';
import {Matreshka as MK, balalaika as $} from 'matreshka';

let data = {
	10: {
		ng: [430, 463, 1404, 139, 204],
		kk: [600, 720, 1291, 197, 302],
		rt: [996, 722, 1251, 178, 302],
		mk: [1126, 1615, 2490, 340, 725]
	},
	50: {
		ng: [58.43, 105, 195, 39.63, 17.36],
		kk: [105, 162, 217, 55.89, 48.37],
		rt: [137, 111, 147, 37.45, 33.75],
		mk: [200, 260, 570, 166, 149]
	},
	100: {
		ng: [21.09, 40.87, 61.53, 15.96, 4.40],
		kk: [42.57, 71.28, 86.31, 25.17, 23.65],
		rt: [47.64, 43.13, 50.62, 15.61, 11.49],
		mk: [90.93, 119, 297, 85.02, 69.25]
	},
	500: {
		ng: [1.44, 2.75, 3.93, 0.95, 0.43],
		kk: [4.00, 2.98, 5.45, 1.80, 2.35],
		rt: [3.34, 2.71, 3.44, 0.79, 0.35],
		mk: [18.21, 23.06, 53.75, 17.31, 11.59]
	},
	1000: {
		ng: [0.37, 0.78, 0.95, 0.28, 0.20],
		kk: [0.67, 0.48, 0.89, 0.44, 0.69],
		rt: [0.79, 0.67, 0.99, 0.21, 0.14],
		mk: [8.71, 11.21, 29.07, 8.66, 5.51]
	}

};

export default class Performance extends MK.Object {
	constructor() {
		super();
		this
			.bindNode('sandbox', '.perf-graph-wrapper')
			.bindNode({
				browser: ':sandbox .perf-browser',
				count: ':sandbox .perf-count',
				graph: ':sandbox .perf-graph',
				browserName: [':bound(browser)', {
					setValue: null,
					getValue() {
						return this[this.selectedIndex].innerHTML;
					}
				}]
			})
			.bindNode({
				count: [':sandbox .benchmark-url', {
					setValue(v) {
						this.href = ({
							10: 'http://jsperf.com/angular-vs-knockout-vs-react-vs-matreshka/20',
							50: 'http://jsperf.com/angular-vs-knockout-vs-react-vs-matreshka/21',
							100: 'http://jsperf.com/angular-vs-knockout-vs-react-vs-matreshka/22',
							500: 'http://jsperf.com/angular-vs-knockout-vs-react-vs-matreshka/23',
							1000: 'http://jsperf.com/angular-vs-knockout-vs-react-vs-matreshka/24'
						})[v];
					}
				}]
			})
			.bindNode({
				mk: ':sandbox .mk',
				kk: ':sandbox .kk',
				ng: ':sandbox .ng',
				rt: ':sandbox .rt'
			}, {
				setValue(v) {
					this.style.height = v + '%';
				}
			})
			.bindNode({
				slower_kk: ':bound(kk) .slower span',
				slower_ng: ':bound(ng) .slower span',
				slower_rt: ':bound(rt) .slower span'
			}, MK.binders.innerHTML())
			.on({
				'change:browser change:count': evt => {
					let d = data[this.count],
						values = [],
						valuesMap = {};

					for (let framework in d) {
						let v = this.browser === 'ie' ? (d[framework][3] + d[framework][4]) / 2 : d[framework][this.nodes.browser.selectedIndex];
						values.push(v);
						valuesMap[framework] = v;
					}

					let max = Math.max.apply(Math, values);

					for (let framework in valuesMap) {
						let v = valuesMap[framework];

						this[framework] = (v / max * 100);
						this[`slower_${framework}`] = (100 - (v / max) * 100 | 0);
						//$( 'div', column )[0].innerHTML = framework === 'mk' ? '' : ( 100 - ( v/max ) * 100 | 0 ) + '% slower';
					}
				}
			}, true);


		let handler = function() {
			let d = data[count[count.selectedIndex].innerHTML.trim()],
				values = [],
				valuesMap = {};

			//graph.innerHTML = '';

			for (let framework in d) {
				let v = browser.value === 'ie' ? (d[framework][3] + d[framework][4]) / 2 : d[framework][browser.selectedIndex];
				values.push(v);
				valuesMap[framework] = v;
			}

			let max = Math.max.apply(Math, values);
			for (let framework in valuesMap) {
				let v = valuesMap[framework],
					column = $(`.column.${framework}`)[0];

				column.style.height = (v / max * 100) + '%';
				$('div', column)[0].innerHTML = framework === 'mk' ? '' : (100 - (v / max) * 100 | 0) + '% slower';
			}
		};

		//$([browser, count]).on('change', handler);
		//handler();
	}
}
