var gulp   = require('gulp'),
	jshint = require('gulp-jshint'),
	yuidoc  = require('gulp-yuidoc'),
	paths  = {
		scripts: ['./**/*.js', '!./node_modules/**/*.js', '!./gulpfile.js', '!./doc/**/*.js']
	};

gulp.task('lint', function() {
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('yuidoc', function() {
	return gulp.src(paths.scripts)
		.pipe(yuidoc({}, {
			themedir: './node_modules/yuidoc-bootstrap-theme',
			helpers: ['./node_modules/yuidoc-bootstrap-theme/helpers/helpers.js']
		}))
		.pipe(gulp.dest('./doc'));
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['lint']);
});

gulp.task('default', ['watch', 'lint']);
