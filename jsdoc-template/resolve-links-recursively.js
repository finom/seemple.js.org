const resolveLinks = require('./resolve-links');

module.exports = function resolveLinksRecursively(obj) {
	if (obj)
		for (let i in obj) {
			obj[i] = typeof obj[i] === 'string' ? resolveLinks(obj[i]) : obj[i];
			obj[i] = typeof obj[i] === 'object' ? resolveLinksRecursively(obj[i]) : obj[i];
		}

	return obj;
}
