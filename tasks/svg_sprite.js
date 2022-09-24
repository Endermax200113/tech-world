const {src, dest} = require('gulp'),
    svgmin = require('gulp-svgmin'),
    sprite = require('gulp-svg-sprite');

module.exports = function svg_sprite() {
    return src('src/svg/**/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeComments: true
            },
            {
                removeEmptyContainers: true
            }
        ]}))
        .pipe(sprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('src/img'))
}