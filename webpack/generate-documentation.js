const path = require('path');
const glob = require('glob');

class Plugin {
    constructor(options) {
        this.options = options;
        this.languages = options.languages;
        this.allDocFileNames = this.getAllDocFileNames();
        this.docFileNamesByLanguage = this.getDocFileNamesByLanguage();
        this.templateFileNames = glob.sync(
            `${options.templateFolder}/**/*`
        );
        this.prevTimestamps = {};
        this.startTime = Date.now();

        for(const language of this.languages) {
            this.compileJSDoc(language, true);
        }
    }

    apply(compiler) {
        compiler.plugin('after-compile', this.afterCompile.bind(this));
        compiler.plugin('emit', this.emit.bind(this))
    }

    afterCompile(compilation, callback) {
        // add files to watch list on every recompilation
        [
          ...this.allDocFileNames,
          ...this.templateFileNames
        ].forEach(name => compilation.fileDependencies.add(name))

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
        const { templateFileNames } = this;

        for(const changedFile of changedFiles) {
            if(templateFileNames.includes(changedFile)) {
                this.compileJSDocAll();
                return;
            }
        }


        for(const language of this.languages) {
            const languageFileNames = this.docFileNamesByLanguage[language];

            for(const changedFile of changedFiles) {
                if(languageFileNames.includes(changedFile)) {
                    this.compileJSDoc(language);
                }
            }
        }
    }

    getFileNames(language) {
        return glob.sync(
            `${this.options.srcFolder}/${language}/**/*.jsdoc.js`
        );
    }

    getAllDocFileNames() {
        const allDocFileNames = [];

        for(const language of this.languages) {
            allDocFileNames.push(...this.getFileNames(language))
        }

        return allDocFileNames;
    }

    getDocFileNamesByLanguage() {
        const docFileNamesByLanguage = {};

        for(const language of this.languages) {
            docFileNamesByLanguage[language] = this.getFileNames(language);
        }

        return docFileNamesByLanguage;
    }

    compileJSDocAll() {
        for(const language of this.languages) {
            this.compileJSDoc(language);
        }
    }

    compileJSDoc(language, isSync) {
        console.log(`Compiling docs for language ${language}`);
        const cli = './node_modules/.bin/jsdoc';
        const { spawn, spawnSync } = require('child_process');
        const spawnFunction = isSync ? spawnSync : spawn;
        const spawnResult = spawnFunction(cli,
            this.docFileNamesByLanguage[language]
                .concat([
                    '-c', `${this.options.templateFolder}/jsdoc-conf.json`,
                    '-t', this.options.templateFolder,
                    '-d', this.options.getDestination(language)
                ]),
            { stdio: 'inherit' }
        )

        if(spawnResult.on) {
            // for asynchronous
            spawnResult.on('close', () => console.log(`Done docs for language ${language}`));
        } else {
            console.log(`Done docs for language ${language}`);
        }
    }
}

module.exports = Plugin;
