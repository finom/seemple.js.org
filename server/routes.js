import express from 'express';
import fragments from './fragments';
import compression from 'compression';
import mime from 'mime-types';

let app = express();

app.use(compression());

app.use(express.static('dist', {
	maxAge: 24*60*60*1000,
	setHeaders: function (res, path) {
		if (mime.lookup(path) === 'text/cache-manifest') {
			res.setHeader('Cache-Control', 'public, max-age=0')
		}
	}
}));

app.get(/(^\/forum(\/)?$)/, (req, res, next) => {
	let lang = req.headers.host.split('.')[0];

	lang = lang == 'ru' ? 'ru' : 'en';


	res.sendFile(`dist/forum-${lang}.html`, {
		root: __dirname
	});
});

app.get(/(^\/$)|(^\/index\.html$)/, (req, res, next) => {
	let lang = req.headers.host.split('.')[0],
		fragment = req.query._escaped_fragment_;

	lang = lang == 'ru' ? 'ru' : 'en';


	if (fragment && fragments[lang]) {
		let data = fragments[lang][fragment];
		res.send(`<!DOCTYPE html>
			<html>
				<head>
					<title>${data.title}</title>
					<meta charset="utf-8">
				</head>
				<body>
					${data.html}
				</body>
			</html>
		`);
	} else {
		res.sendFile(`dist/${lang}.html`, {
			root: __dirname
		});
	}
});

app.listen(process.env.PORT || 3000);
