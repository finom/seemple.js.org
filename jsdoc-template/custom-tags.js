module.exports.defineTags = dictionary => {
    const customTags = [
        'lang',
        'importance',
        'oldlink',
        'synonym',
        // we need to use @module as is because jsdoc doesn't allow to use both @name and @module
        'module'
    ];

    const defineSimpleTag = tagName => {
        dictionary.defineTag(tagName, {
            onTagged(doclet, tag) {
                doclet[tagName] = tag.value;
            }
        });
    }

    for(const tagName of customTags) {
        defineSimpleTag(tagName);
    }
};
