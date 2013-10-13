module.exports = function () {
    var startRunner = function (process, args, onStart, onProgress, onComplete, onAllPassed, onSomeFailed) {
        var progressBar = require('multimeter');
        //setup hooks on response stream for test progress, run completion, failures
    };

    var onStart = function () {
        //show multimeter and calculate size based on number of tests to run
    };

    var onProgress = function () {
        //update multimeter with number of test runs / total tests and next executing test
    };

    var onComplete = function () {
        //update multimeter as complete and output file locations
    };

    var onAllPassed = function () {
        //color multimeter green
    };

    var onSomeFailed = function () {
        //color multimeter red
    };

    return {
        startRunner: startRunner,
        onStart: onStart,
        onProgress: onProgress,
        onComplete: onComplete,
        onAllPassed: onAllPassed,
        onSomeFailed: onSomeFailed
    };
};