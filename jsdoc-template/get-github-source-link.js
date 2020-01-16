const fs = require('fs');
const path = require('path');
function checkExistence(filePath) {
    // check if something gone wrong with paths
    // eg jsdoc template folder is moved somewhere
    try {
        fs.accessSync(filePath, fs.F_OK);
    } catch(e) {
        throw Error(`Cannot generate Github URL.
Something goes wrong with paths, eg jsdoc template folder is moved somewhere.
File does not exist: ${filePath}`)
    }
}

module.exports = (dirname, item) => {
    const root = path.resolve(dirname, '..') + '/';
    const relativePath = item.meta.path.replace(root, '');
    const relativeFilePath = path.join(relativePath, item.meta.filename);
    const linenoSuffix = item.meta.lineno !== 1 ? '#L' + item.meta.lineno : '';
    const escapedFilePath = relativeFilePath.replace(/#/g, '%23');

    checkExistence(path.resolve(root, relativeFilePath))

    return 'https://github.com/finom/seemple.io/blob/master/' + escapedFilePath + linenoSuffix;
}
