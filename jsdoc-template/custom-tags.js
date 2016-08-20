module.exports.defineTags = dictionary => {
    const customTags = [
        'lang',
        'importance',
        'oldlink',
        'synonym'
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
