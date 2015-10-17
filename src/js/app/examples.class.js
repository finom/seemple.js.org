import g from './globals';
import {Matreshka as MK, balalaika as $} from '../matreshka';

export default class Examples extends MK {
    constructor() {
        super()
            .bindNode('sandbox', 'article[id="!examples"]')
            .on('click::(a)', evt => {
                let target = evt.target;

                if(!~target.href.indexOf('gh-embed')) return;
                evt.preventDefault();

                if(!target.classList.contains('initialized')) {
                    target.parentNode.insertBefore($.create('iframe', {
                        src: target.href,
                        attributes: {
                            width: "100%",
                            height: "500",
                            frameborder: "0"
                        }
                    }), target.nextSibling);
                    target.classList.add('initialized');
                } else {
                    target.nextSibling.classList.toggle('hide');
                }
            })
    }
}
