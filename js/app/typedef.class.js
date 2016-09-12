import g from './globals';
import MatreshkaObject from 'matreshka/object';
import $ from 'balajs';

export default class extends MatreshkaObject {
	constructor() {
		super();
	}

	onRender() {
		this.bindNode('typedef', ':sandbox', MK.binders.dataset('typedef'))
			.bindNode('isShown', ':sandbox', MK.binders.className('shown'));
	}
}
