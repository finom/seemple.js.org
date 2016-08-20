const mdParser = require('marked');

module.exports = function parseExample(example) {
    var execResult;
    if (execResult = /<caption>([\s\S]*)<\/caption>([\s\S]+)/.exec(example)) {
        var header = mdParser(execResult[1]);
        var code = execResult[2]
    } else {
        header = '';
        code = example;
    }

    return {
        header: header,
        code: code.replace(/^\s+/, '').replace(/</g, '&lt;')
    };
}
