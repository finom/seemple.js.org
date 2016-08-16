import g from './globals';
import {Matreshka as MK, balalaika as $} from '../matreshka';

export default class extends MK.Object {
	constructor() {
		super();
	}
	
	onRender() {
		this.bindNode('typedef', ':sandbox', MK.binders.dataset('typedef'))
			.bindNode('isShown', ':sandbox', MK.binders.className('shown'));
	}
}
