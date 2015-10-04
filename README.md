# [matreshka.io](http://matreshka.io) source code

This repo contains the source code for Matreshka.js website. It's moved to open-source because of 2 reasons:

1. For better Matreshka docs collaboration.
2. Some people asked how can they make the same cool website for another library or a framework. It's for you, guys. The website and docs are available under MIT license, that means you can use every part of this repo for any purpose including commercial. But pay attention: the source code isn't created for general use. There are many matreshka-specific parts and you can meet hardcoded spikes.

## Project structure

- /template - JSDoc template
- /src - Jekyll source
- /src/sass - Compass-based stylesheets
- /src/js - Javascript source (written in ECMAScript 2015+)
- /dist - Compiled ready-to-go HTML, CSS and JS. It's gitignored, so you need to run ``gulp`` to get this folder
- /en - Matreshka documentation source in English
- /ru - Matreshka documentation source in Russian
- /configs - Config files
- /server and /assets contain server stuff. If you're collaborator, you don't need them

## How to compile

If you want to make some changes to Matreshka docs you need to run the website and take a look how your change looks like. This step is required.

1. Install [NodeJS 4+](https://nodejs.org/).
2. Install [Jekyll](https://jekyllrb.com/).
3. Install [Gulp](http://gulpjs.com/) globally.
4. Install dependencies via ``npm install``.
5. Run ``gulp`` to see is everything OK (/dist folder is created and HTML files look not broken).

## Useful Gulp tasks

- ``gulp watch`` - starts watching scripts and styles
- ``gulp scripts`` - rebuilds scripts
- ``gulp styles`` - rebuilds styles
- ``gulp jsdoc`` - compiles .jsdoc and .md files from /en and /ru to Jekyll templates
- ``gulp jekyll`` - runs Jekyll builder
- ``gulp deploy`` - deploys the website to the server. You don't actually need it
- ``gulp`` - builds everything (docs, HTML, styles and scripts)
