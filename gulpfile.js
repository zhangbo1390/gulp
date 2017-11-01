var gulp = require('gulp');
var uglify = require('gulp-uglify'); //压缩js文件
var concat = require('gulp-concat'); //合并js文件
var minifyCss = require('gulp-minify-css'); //压缩css文件
var minifyHtml = require('gulp-minify-html'); //压缩html文件
var jshint = require('gulp-jshint'); //检查js 代码语法,如果想要让检查的信息以突出的样式显示，使用jshint-stylish(npm install jshint-stylish),如果想查看检查结果的详细错误信息，使用map-stream(npm install map-stream)
/*var replace = require('gulp-replace'); //替换内容*/

gulp.task('js',function(){
    //gulp.src('./1.js').pipe(uglify()).pipe(gulp.dest('./dest'));
    //gulp.src(['./1.js','./2.js']).pipe(uglify()).pipe(concat('12.js')).pipe(gulp.dest('./dest'));
    gulp.src('./*.js').pipe(jshint()).pipe(jshint.reporter('default'));
});
gulp.task('css',function(){
    gulp.src('./css/*.css').pipe(minifyCss()).pipe(gulp.dest('./dest/css'));
});
gulp.task('html',function(){
    gulp.src('./!*.html').pipe(minifyHtml()).pipe(gulp.dest('./dest/html'));
});

gulp.task('default',['js']);
