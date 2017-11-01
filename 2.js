/**
 * Created by XbZhang on 2017/11/1.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify'); //压缩js文件

gulp.task('js',function(){
    gulp.src('./1.js').pipe(uglify()).pipe(gulp.dest('./dest'));
});

gulp.task('default',['js']);
