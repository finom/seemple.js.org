module.exports = function resolveLinks(text) {
	return text
		.replace(/{@link\s+#typedef-([A-Za-z]+)\s*}/g, function(_, type) {
			return '<span data-type="' + type + '">' + type + '</span>';
		})
		.replace(/{@link\s+(\S+)\s*([\$A-zА-яіїє \.\-\\']*)}/g, function(_, member, text) {

			return ~member.indexOf('http')
				? '<a href="' + member + '" target="_blank">' + (text || member) + '</a>'
				: '<a href="#!' + member.replace(/#/g, '-') + '">' + (text || member) + '</a>';
		});
}
