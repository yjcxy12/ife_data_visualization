var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require('gulp-browserify');

gulp.task('browserify', ['babel'], function() {
    gulp.src('js/index.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task("babel", function () {
  return gulp.src(["js/**/*.jsx"])
    .pipe(babel())
    .pipe(gulp.dest("js"));
});

gulp.task("watch", function () {
	return gulp.watch(['js/**', '!js/bower_components/**'], ['browserify']);
});