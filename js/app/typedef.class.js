import g from './globals';
import SeempleObject from 'seemple/object';
import $ from 'balajs';
import { dataset, className } from 'seemple/binders';

export default class extends SeempleObject {
	constructor() {
		super();
	}

	onRender() {
		this.bindNode('typedef', ':sandbox', dataset('typedef'))
			.bindNode('isShown', ':sandbox', className('shown'));
	}
}
