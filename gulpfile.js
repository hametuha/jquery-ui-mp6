/*!
 * Gulp task
 */

var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

// Compass Task
gulp.task('compass',function(){
    return gulp.src(['src/scss/**/*.scss'])
        .pipe($.plumber())
        .pipe($.compass({
            config_file: 'src/config.rb',
            sourcemap: false,
            debug : true,
            css: 'src/css',
            sass: 'src/scss'
        }))
        .pipe(gulp.dest('src/css'));
});

// watch
gulp.task('watch',function(){
    gulp.watch('src/scss/**/*.scss',function(event){
        gulp.run('compass');
    });
});

// Default Tasks
gulp.task('default', ['watch']);
