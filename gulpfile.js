('use strict');
// npm i -D gulp gulp-sass

// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');

// 掃き出し階層の指定を定義
const path = {
  src: './sass/**/*.scss',
  dist: './css/',
};
const opts = {
  expanded: 'expanded', //:一般的なCSS style.
  compressed: 'compressed', //:圧縮.
  nested: 'nested', //: 閉じダグのみ}改行なし.
  compact: 'compact', //: class内のみ改行しない.
};

gulp.task('sass', function (done) {
  gulp
    .src(path.src)
    .pipe(sass({ outputStyle: opts.expanded }))
    .pipe(gulp.dest(path.dist));
  done();
});

//動作設定
gulp.task(
  'default',
  gulp.series('sass', function (done) {
    gulp.watch(path.src, gulp.series('sass'));
    done();
  })
);

// Type
// > gulp
