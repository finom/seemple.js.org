import g from './globals';
import Matreshka from 'matreshka/matreshka';
import $ from 'balajs';

export default class Examples extends Matreshka {
    constructor() {
        super()
            .bindNode('sandbox', 'article[id="!examples"]')
            .on('click::(a)', evt => {
                let target = evt.target;

                if(!~target.href.indexOf('gh-embed')) return;
                evt.preventDefault();

                if(!target.classList.contains('initialized')) {
                    target.parentNode.appendChild($.create('iframe', {
                        src: target.href,
                        attributes: {
                            width: "100%",
                            height: "500",
                            frameborder: "0"
                        }
                    }));
                    target.classList.add('initialized');
                } else {
                    target.parentNode.lastChild.classList.toggle('hide');
                }
            })
    }
}
