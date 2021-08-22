('use strict');
const gulp = require('gulp'); // gulp本体
const sass = require('gulp-sass'); // Sassをコンパイルする
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer'); // vender prefix を 付与.
const sourcemaps = require('gulp-sourcemaps'); // scssの箇所をmapさせる.

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
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        // glugins
        autoprefixer({
          // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
          browsers: ['last 2 versions', 'ie >= 11', 'Android >= 4'], // ☆IEは11以上、Androidは4.4以上
          cascade: false,
        }),
      ])
    )
    .pipe(sass({ outputStyle: opts.expanded })) // expanded: いつもの. compressed: 圧縮. nested: 閉じダグのみ}改行なし. compact: class内のみ改行しない.
    .pipe(sourcemaps.write('.')) // current出力. 記載なしは、ファイル出力はしないがmapはされる。
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
