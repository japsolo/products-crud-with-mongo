const mongoose = require('mongoose'); 

let ProductSchema = new mongoose.Schema({
	id: Number,
	slug: { type: String, required: true },
	pdtoName: { type: String, required: true },
	pdtoPrice: { type: String, required: true },
	pdtoDesc: { type: String, required: true },
	pdtoLongDesc: { type: String, required: true },
	pdtoImage: { type: String, required: true }
}, { versionKey: false }); // versionKey: para no tener el campo __v


module.exports = mongoose.model('Product', ProductSchema);
