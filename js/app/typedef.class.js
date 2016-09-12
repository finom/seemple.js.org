import g from './globals';
import MatreshkaObject from 'matreshka/object';
import $ from 'balajs';
import { dataset, className } from 'matreshka/binders';

export default class extends MatreshkaObject {
	constructor() {
		super();
	}

	onRender() {
		this.bindNode('typedef', ':sandbox', dataset('typedef'))
			.bindNode('isShown', ':sandbox', className('shown'));
	}
}
