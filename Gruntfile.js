var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
    // load all grunt tasks!
    require('load-grunt-config')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        },
        watch: {
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    './*.html',
                    './*.css',
                    './*.js'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.'),
                        ];
                    }
                }
            },
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>/?debug'
            }

        },
    });

    grunt.registerTask('server', function (target) {
        grunt.task.run([
            //'concurrent:server',
            'connect:livereload',
            'open:server',
            'watch'
        ]);
    });
};
