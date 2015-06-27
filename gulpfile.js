var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
	return gulp.src('*.scss')
		.pipe(autoprefixer({
			remove: false,
			browsers: ['> 1%', 'last 3 versions', 'Firefox >= 20', 'Opera >= 9', 'IE >= 9']
		}))
		.pipe(gulp.dest('dist'));
});