const fs = require('fs'),
	chalk = require('chalk');

let srcFonts = 'src/sass/_local-fonts.sass',
	appFonts = 'build/fonts/';

module.exports = function fonts(done) {
	fs.writeFile(srcFonts, '', () => {});
	fs.readdir(appFonts, (err, items) => {
		if (items) {
			let cFontname;

			for (let i = 0; i < items.length; i++) {
				let fontname = items[i].split('.'),
					fontExt;

				fontExt = fontname[1];
				fontname = fontname[0];

				if (cFontname != fontname) {
					if (fontExt == 'woff' || fontExt == 'woff2') {
						fs.appendFile(srcFonts, `@include font-face("${fontname}", "${fontname}", 400);\r\n`, () => {});
						console.log(chalk `
{bold {bgGray Добавлен новый шрифт: ${fontname}.}}
----------------------------------------------------------------------------------
{bgYellow.black Пожалуйста, переместите вызов @mixin из {cyan src/sass/_local-fonts.sass} в {cyan src/sass/_fonts.sass}, после чего измените его.}
----------------------------------------------------------------------------------
`);
					}
				}

				cFontname = fontname;
			}
		}
	});

	done();
}