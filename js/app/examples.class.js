import g from './globals';
import Matreshka from 'matreshka/matreshka';
import $ from 'balajs';

export default class Examples extends Matreshka {
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

                    import('github-embed').then((githubEmbed) => {
                        githubEmbed(exampleMountBlock, `${href}.gh-embed.json`)

                        target.classList.add('initialized');
                    });
                } else {
                    target.parentNode.lastChild.classList.toggle('hide');
                }
            })
    }
}
