import g from './globals';
import Seemple from 'seemple/seemple';
import $ from 'balajs';

export default class Examples extends Seemple {
    constructor() {
        super()
            .bindNode('sandbox', 'article[id="!examples"]')
            .on('click::(.example-link)', evt => {
                const { target } = evt;
                const { href } = target;

                evt.preventDefault();

                if(!target.classList.contains('initialized')) {
                    const exampleMountBlock = target.parentNode.appendChild(document.createElement('div'));
                    exampleMountBlock.style.width = "100%";
                    exampleMountBlock.style.height = "500px";

                    import('github-embed').then(({default:githubEmbed}) => {
                        githubEmbed(exampleMountBlock, `${href}.gh-embed.json`)

                        target.classList.add('initialized');
                    });
                } else {
                    target.parentNode.lastChild.classList.toggle('hide');
                }
            })
    }
}
