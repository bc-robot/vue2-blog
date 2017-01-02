/**
 * Created by kevin on 16/12/11.
 */
import path from 'path'
import gulp from 'gulp'
import gutil from 'gulp-util'
import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import del from 'del'
import env from 'gulp-env'
import gulpSequence from 'gulp-sequence'
import nodemon from 'gulp-nodemon'
import open from 'open'
import run from 'gulp-run'

const DEV_PORT = 3000,PROD_PORT = 8300
gulp.task('serve', cb => {
    let host = '192.168.1.100';
    env({
        vars: {
            'NODE_ENV': 'development'
        }
    });
    let webpackConfig = require('./build/webpack.dev.conf');
    let myConfig = Object.create(webpackConfig);
    // myConfig.entry.unshift('webpack/hot/dev-server');
    myConfig.entry.unshift('webpack/hot/only-dev-server');
    myConfig.entry.unshift('webpack-dev-server/client?http://'+host+':' + DEV_PORT);

    new WebpackDevServer(webpack(myConfig), {
        noInfo: false,
        hot: true,
        inline: true,
        historyApiFallback: true,
        publicPath: myConfig.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(DEV_PORT, host, err => {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);
        gutil.log('[webpack-dev-server]', '==> http://'+host+':' + DEV_PORT);
        open('http://'+host+':' + DEV_PORT);
    });
});

gulp.task('clean', cb => del([path.join(__dirname, '/dist/*')]));

gulp.task('set-env-prod', () => {
    env({
        vars: {
            'NODE_ENV': 'production'
        }
    });
});

gulp.task('webpack', cb => {
    let WebpackConfig = require('./build/which.webpack');
    let myConfig = Object.create(WebpackConfig);
    webpack(myConfig, function(err, stats) {
        if(err) {
            throw new gutil.PluginError('webpack', err);
        }else {
            gutil.log('[webpack]', stats.toString({
                // output options
            }));
        }
    })
});

gulp.task('webpack:dist', gulpSequence('set-env-prod', 'webpack'));
gulp.task('build', gulpSequence('clean', 'webpack:dist'));

gulp.task('nodemon', () => {
    nodemon({
        script: path.join(__dirname, './build/server.js'),
        ext: 'js',
        watch: [
            path.join(__dirname, '/dist')
        ],
        env: {
            'NODE_ENV': 'production',
            'PORT': PROD_PORT
        }
    });
});

gulp.task('doc', () => {
    return run('apidoc -c apidoc/ -i back/routes/ -o dist/doc/')
        .exec()
        .pipe(gulp.dest('output'));
});

gulp.task('serve:dist', gulpSequence('build', 'nodemon'));

