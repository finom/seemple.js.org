import jsdom from "jsdom";
import fs from 'fs';
let fragments = {
	en: {},
	ru: {}
};

for (let lang of Object.keys(fragments)) {
	let html = fs.readFileSync(`dist/${lang}.html`);
	jsdom.env({
        html,
        done: (err, window) => {
    		for(let article of $('article[id]')) {
				let title = article.querySelector('h2');
                fragments[lang][article.id.replace('!', '')] = {
					html: article.outerHTML,
					title: title ? title.textContent.trim() : article.id
				};
            }

			function $(s, context) {
				return [...( context || window.document ).querySelectorAll(s)]
			}
    	}
    });
}

module.exports = fragments;
