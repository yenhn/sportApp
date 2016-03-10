// Karma configuration
// Generated on Tue Mar 08 2016 19:09:08 GMT+0700 (SE Asia Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/firebase/firebase.js',
    'bower_components/angularfire/dist/angularfire.min.js',
    'bower_components/firebase-util/dist/firebase-util.min.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/moment/min/moment.min.js',
    'bower_components/angular-breadcrumb/dist/angular-breadcrumb.js',
    'libs/js/calendar/ui-bootstrap-tpls.min.js',
    'bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js',
    'core/constant.js',
    'modules/module.js',
    'services/service.js',
    'directives/directive.js',
    'core/filters.js',
    'news/controllers/IndexController.js',
    'news/controllers/DetailNewsController.js',
    'news/providers/newsProvider.js', 
    'calendar/controllers/CalendarController.js',  
    'calendar/providers/calendarProvider.js',
    'calendar/services/calendarFactory.js',
    'teams/controllers/TeamsController.js',
    'teams/controllers/DetailTeamsController.js',
    'teams/providers/TeamsProvider.js', 
    'ladders/controllers/LaddersController.js',
    'ladders/providers/listLaddersProvider.js', 
    'ladders/filters/ladderFilter.js',
    'bower_components/angular-moment/angular-moment.min.js',
    'bower_components/bigSlide/dist/bigSlide.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/owl.carousel/dist/owl.carousel.js',
    'bower_components/wow/dist/wow.min.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'unitest.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
