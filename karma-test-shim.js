/**
 * Created by jnevins on 6/11/16.
 *
 * Adapted from:
 * https://github.com/juliemr/ng2-test-seed/blob/master/karma-test-shim.js
 */
/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {
};


function isJsFile(path) {
    return path.slice(-3) == '.js';
}

function isSpecFile(path) {
    return path.slice(-8) == '.unit.js';
}

function isBuiltFile(path) {
    var builtPath = '/base/app/';
    return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
    .filter(isSpecFile)
    .filter(isBuiltFile);

// Load our SystemJS configuration.
System.config({
    baseURL: '/base'
    //baseURL: ''
});

System.config(
    {
        map: {
            'rxjs': 'node_modules/rxjs',
            '@angular': 'node_modules/@angular',
            'app': 'app'
        },
        packages: {
            'app': {
                main: 'main.js',
                defaultExtension: 'js'
            },
            '@angular/core': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/compiler': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/http': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/common': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/platform-browser': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/platform-browser-dynamic': {
                main: 'index.js',
                defaultExtension: 'js'
            },
             '@angular/router-deprecated': {
               main: 'index.js',
               defaultExtension: 'js'
             },
            'rxjs': {
                defaultExtension: 'js'
            }
        }
    });


Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];

    testing.setBaseTestProviders(testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
        testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

}).then(function() {
    // Finally, load all spec files.
    // This will run the tests directly.
    return Promise.all(
        allSpecFiles.map(function (moduleName) {
            return System.import(moduleName);
        }));
}).then(__karma__.start, __karma__.error);