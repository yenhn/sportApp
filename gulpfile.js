
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
gulp.task('sass', function(){
  return gulp.src('dist/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
});
gulp.task('watch', function(){
  gulp.watch('dist/scss/style.scss', ['sass']); 
  // Other watchers
});
gulp.task('scripts', function () {
    return gulp.src(['news/controllers/*.js','teams/controllers/*.js','ladders/controllers/*.js','calendar/controllers/*.js','core/js/*.js','directives/js/*.js','modules/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});