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
	gulp.watch('js/components/*.jsx', ['browserify']);
  gulp.watch('js/services/*.js', ['browserify']);
  gulp.watch('js/index.jsx', ['browserify']);
});