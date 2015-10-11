"use strict";
let gulp = require('gulp'),
	gutil = require('gulp-util');

gulp.task('jekyll', cbc => {
	let spawn = require('child_process').spawn,
		jekyll = spawn('jekyll', ['build', '-s', 'src', '-d', 'dist', '--config', './configs/jekyll.yml'], {
			stdio: 'inherit'
		});

	jekyll.on('exit', code => cbc(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code));
});


gulp.task('jsdoc', cbc => {
    let jsdoc = require("gulp-jsdoc"),
		cli = './node_modules/jsdoc/jsdoc.js',
		args = ['-t', './template'],
		spawn = require('child_process').spawn,
		fileNames = [
			'types',
			'Matreshka',
			'Matreshka-static',
			'Matreshka.Object',
			'Matreshka.Array',
			'Matreshka.binders'
		],
		done = 0;

	spawn(cli, fileNames.map(name => `ru/jsdoc/${name}.jsdoc`)
			.concat(['-d', 'src/_includes/ru'])
			.concat(args), {
				stdio: 'inherit'
			})
		.on('close', evt => done++ && cbc());

	spawn(cli, fileNames.map(name => `en/jsdoc/${name}.jsdoc`)
			.concat(['-d', 'src/_includes/en'])
			.concat(args), {
				stdio: 'inherit'
			})
		.on('close', evt => done++ && cbc());
});

gulp.task('scripts', () => {
	function handleError(err) {
	  	console.error(err);
	  	this.emit('end');
	}

	let source = require('vinyl-source-stream'),
    	browserify = require("browserify"),
    	babelify = require("babelify"),
    	rename = require('gulp-rename'),
    	uglify = require('gulp-uglify'),
    	sourcemaps = require('gulp-sourcemaps'),
    	streamify = require('gulp-streamify');

	return browserify("src/js/app.js", {
			debug: true
		})
		.transform(babelify.configure({
			stage: 0
		}))
		.bundle()
		.on('error', handleError)
		.pipe(source('app.js'))
		.pipe(gulp.dest('dist/js/'))
		.pipe(rename('app.min.js'))
		.pipe(streamify(sourcemaps.init({
			loadMaps: true
		})))
		.pipe(streamify(uglify()))
		.on('error', e => console.error(e))
		.pipe(streamify(sourcemaps.write('.')))
		.pipe(gulp.dest('dist/js/'))

});

gulp.task('styles', () => {
	let compass = require('gulp-compass'),
		autoprefixer = require('gulp-autoprefixer');

		gulp.src('src/sass/**/*.scss')
			.pipe(compass({
				sass: 'src/sass',
				css: 'dist/css',
				image: 'src/img'
			}).on('error', e => console.error(e)))
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(gulp.dest('dist/css'));
});

// Rerun the task when a file changes
gulp.task('watch', () => {
	gulp.start('default');
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('src/sass/**/*.scss', ['styles']);
	gulp.watch(['src/_*/**', 'src/img/**', 'src/*.html', 'src/matreshka.appcache'], ['jekyll']);
});

gulp.task('deploy', ['deploy:server', 'deploy:website']);


gulp.task('deploy:server', () => {
	let sftp = require("gulp-sftp");
	gulp.src('server/**/*')
        .pipe(sftp({
            host: 'matreshka.io',
            auth: 'keyMain',
			remotePath: '/home/finom/web/matreshka/'
        }));
});

gulp.task('deploy:website', () => {
	let sftp = require("gulp-sftp");
	gulp.src('dist/**/*')
        .pipe(sftp({
            host: 'matreshka.io',
            auth: 'keyMain',
			remotePath: '/home/finom/web/matreshka/dist/'
        }));
});


gulp.task('copypackage', () => {
	// this is undocumented task that copies package.json to /src/_data/ folder
	let rename = require('gulp-rename');
	return gulp.src('../matreshka_develop/package.json')
		.pipe(rename('package.yaml'))
		.pipe(gulp.dest('src/_data/'));
});

gulp.task('copymatreshka', () => {
	// this is undocumented task that copies matreshka files to /dist folder
	return gulp.src(['../matreshka_develop/**/*', '!../matreshka_develop/node_modules/**/*'])
		.pipe(gulp.dest('dist/matreshka/')).on('error', e => console.error(e));
});

gulp.task('default', ['jsdoc', 'jekyll', 'styles', 'scripts']);
