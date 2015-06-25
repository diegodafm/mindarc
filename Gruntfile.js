module.exports = function ( grunt ) {

    'use strict';

    grunt.initConfig({
        jsbeautifier : {
            files : ['src/**/*.js','!src/vendor/**/*.js'],
            options : {
            }
        },
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['Gruntfile.js','bower.js','src/**/*.js'],
                tasks: ['jsbeautifier', 'jshint']
            },
            css: {
                files: [
                    'src/styles/*.scss'
                ],
                tasks: ['compass']
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'src/styles/',
                    cssDir: 'dist/styles/'
                }
            }
        },
        clean: {
            cache: [
                '.sass-cache'
            ]
        },
        jshint: {
            all: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: [
                    'Gruntfile.js',
                    'bower.js',
                    'src/scripts/**/*.js',
                    'test/**/*.js',
                    '!node_modules/**/*.js',
                    '!src/vendor/**/*.js',
                ]
            }
        }

    });

    // ===========================================================================
    // EVENTS ====================================================================
    // ===========================================================================
    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(('EVENT ' + target + ':').green ,  (filepath + ' has ' + action).yellow);
    });


    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // ===========================================================================
    // REGISTER TASKS ============================================================
    // ===========================================================================
    grunt.registerTask( 'build', [ 'jshint', 'compass', 'clean:cache' ] );
    grunt.registerTask( 'default', [ 'build' ,'watch'] );

};