module.exports.defineTags = dictionary => {
    const defineSimpleTag = tagName => {
        dictionary.defineTag(tagName, {
            onTagged(doclet, tag) {
                doclet[tagName] = tag.value;
            }
        });
    }

    for(const tagName of ['lang', 'importance']) {
        defineSimpleTag(tagName);
    }
};
