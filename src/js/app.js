try {
    var Main = require('./app/main.class');
    module.exports = window.app = new Main();
} catch(e) {
    if(confirm('Houston, we have a problem:\n' + e + '\n\nThe main script of the website is thrown an error. Would you like to report the issue?')) {
        location.href = 'https://github.com/matreshkajs/matreshka.io/issues/new?title=Houston,%20we%20have%20a%20problem&body=userAgent: ' + encodeURIComponent(' ' + navigator.userAgent + '\nError: ' + e.message);
    }
    document.querySelector('.loader').classList.add('hide');
}
