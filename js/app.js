import Main from './app/main.class';

try {
    window.app = new Main();
} catch(e) {
	let report = 'https://github.com/finom/seemple.io/issues/new?title=Houston,%20we%20have%20a%20problem&body=userAgent: ' + encodeURIComponent(' ' + navigator.userAgent + '\nError: ' + e.message);

    if(!localStorage.ignoreErrors && confirm('Houston, we have a problem:\n' + e + '\n\nThe main script of the website is thrown an error. Would you like to report the issue?\n\nBy pressing "Cancel" further errors will be ignored and you can continue reading documentation, but some features will not work (syntax highlighting, comments etc).')) {
        location.href = report;
    } else {
		localStorage.ignoreErrors = 1;
		[].slice.call(document.querySelectorAll('nav .submenu-wrapper ul')).forEach(function(node) {
			node.style.marginTop = 0;
		});
		document.querySelector('.view-switcher').style.color = 'red';
		document.querySelector('.view-switcher').innerHTML = 'Error loading the website <a href="'+report+'" style="padding: 0;">Report the issue</a>';
		document.querySelector('.loader').classList.add('hide');
        document.querySelector('body').setAttribute('data-view', 'all');
        throw e;
	}
}
