var gulp = require('gulp');  //gulpプラグインの読み込み
var sass = require('gulp-sass'); //sass to css
var autoprefixer = require('gulp-autoprefixer'); // Auto Vender pri (-webkit-..
var sourcemaps = require('gulp-sourcemaps');// errorわかりやすく

gulp.task('sass', function () {
  return gulp.src('./origin/blog.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))//返還後のstyle,error
    .pipe(autoprefixer({  //autoprefixerの実行
      browsers: ["last 2 versions"],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./origin/'));
});

gulp.task('watch',function() {
  gulp.watch("./origin/*.scss", ["sass"]); // 第2は require時のobj変数名
})

// タスク"task-watch"がgulpと入力しただけでdefaultで実行されるようになる
gulp.task('default', ['watch']);

