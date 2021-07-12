"use strict";
// npm i -D gulp gulp-sass

// プラグインの読み込み
const gulp = require('gulp');
const sass = require('gulp-sass');
// 掃き出し階層の指定を定義
const path = {
  src: './assets/sass/**/*.sass',
  dist: './assets/css/'
}

gulp.task("sass", function (done) {
  gulp
    .src(path.src)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest(path.dist));
  done();
});

//動作設定
gulp.task("default", gulp.series('sass', function(done){
    gulp.watch(path.src, gulp.series('sass'));
    done();
}));

// Type
// > gulp
