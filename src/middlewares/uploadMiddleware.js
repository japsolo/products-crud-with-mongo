const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.resolve(__dirname, '../../public/images/pdtos'));
	},
	filename: function (req, file, cb) {
		let pdtoSlug = req.body.pdtoName.replace(/ /g, '-').toLowerCase();
		let timestamp = new Date;
		let ext = path.extname(file.originalname);
		cb(null, `${pdtoSlug}-${timestamp.getTime()}${ext}`);
	}
});

let upload = multer({ storage: storage });

module.exports = upload;