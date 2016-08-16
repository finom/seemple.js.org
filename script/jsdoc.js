const jsdoc = require('jsdoc-api');
const path = require('path');

let cli = './node_modules/.bin/jsdoc',
    args = ['-t', './jsdoc-template'],
    spawn = require('child_process').spawn,
    fileNames = [
        'types',
        'Matreshka',
        'Matreshka-static',
        'Matreshka.Object',
        'Matreshka.Array',
        'Matreshka.binders',
        'globals'
    ],
    done = 0;

spawn(cli, fileNames.map(name => `doc/ru/${name}.jsdoc`)
        .concat(['-d', 'temp/ru'])
        .concat(args), {
            stdio: 'inherit'
        })

spawn(cli, fileNames.map(name => `doc/ru/${name}.jsdoc`)
        .concat(['-d', 'temp/en'])
        .concat(args), {
            stdio: 'inherit'
        })
