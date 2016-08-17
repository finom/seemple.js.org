const path = require('path');

class Plugin {
    constructor(options) {
        this.options = options;
        this.languages = ['en', 'ru'];
        this.allFileNames = this.getAllFileNames();
        this.fileNamesByLanguage = this.getFileNamesByLanguage();
        this.prevTimestamps = {};
        this.startTime = Date.now();

        for(const language of this.languages) {
            this.compileJSDoc(language);
        }
    }

    apply(compiler) {
        compiler.plugin('after-compile', this.afterCompile.bind(this));
        compiler.plugin('emit', this.emit.bind(this))
    }

    afterCompile(compilation, callback) {
        // add files to watch list on every recompilation
        compilation.fileDependencies.push(...this.allFileNames);
        callback();
    }

    emit(compilation, callback) {
        const { fileTimestamps } = compilation;

        const changedFiles = Object.keys(fileTimestamps).filter(watchfile => {
            const { prevTimestamps, startTime } = this;
            const prevTimestamp = prevTimestamps[watchfile] || startTime;
            const currTimestamp = fileTimestamps[watchfile] || Infinity;

            return prevTimestamp < currTimestamp;
        });

        this.prevTimestamps = fileTimestamps;

        if(changedFiles.length) {
            this.renderChanged(changedFiles);
        }

        callback();
    }

    renderChanged(changedFiles) {
        for(const language of this.languages) {
            const languageFileNames = this.fileNamesByLanguage[language];

            for(const changedFile of changedFiles) {
                if(languageFileNames.includes(changedFile)) {
                    this.compileJSDoc(language);
                }
            }
        }
    }

    /*getDefaultTimeStamps() {
        const now = Date.now();
        const defaultTimeStamps = {};

        for(let fileName of this.allFileNames) {
            defaultTimeStamps[fileName] = now;
        }

        return defaultTimeStamps;
    }*/

    getFileNames(language) {
        return [
            'types',
            'Matreshka',
            'Matreshka-static',
            'Matreshka.Object',
            'Matreshka.Array',
            'Matreshka.binders',
            'globals'
        ].map(name => path.resolve(__dirname, this.options.srcFolder, `${language}/${name}.jsdoc`));
    }

    getAllFileNames() {
        const allFileNames = [];

        for(const language of this.languages) {
            allFileNames.push(...this.getFileNames(language))
        }

        return allFileNames;
    }

    getFileNamesByLanguage() {
        const fileNamesByLanguage = {};

        for(const language of this.languages) {
            fileNamesByLanguage[language] = this.getFileNames(language);
        }

        return fileNamesByLanguage;
    }

    compileJSDoc(language) {
        console.log(`Compiling docs for language ${language}`);
        const cli = './node_modules/.bin/jsdoc';
        const { spawn } = require('child_process');
        spawn(cli,
            this.fileNamesByLanguage[language]
                .concat([
                    '-t', './jsdoc-template',
                    '-d', this.options.getDestination(language)
                ]),
            { stdio: 'inherit' }
        ).on('close', () => console.log(`Done docs for language ${language}`));
    }
}

module.exports = Plugin;
