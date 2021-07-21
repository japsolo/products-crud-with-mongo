const Product = require('../database/models/product');

module.exports = {
	index: async (req, res) => {
		let products = await Product.find({});
		return res.render('index', { products });
	},

	show: async (req, res) => {
		let product = await Product.findById({ _id: req.query.id });
		return res.render('detail', { product });
	},

	edit: async (req, res) => {
		let product = await Product.findById({ _id: req.query.id });
		return res.render('form', { product });
	},

	update: async (req, res, next) => {
		let pdtoSlug = req.body.pdtoName.trim().replace(/ /g, '-').toLowerCase();
		let product = await Product.findById({ _id: req.params.id });
		let productUpdated = await Product.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				...req.body,
				slug: pdtoSlug,
				pdtoImage: req.file ? req.file.filename : product.pdtoImage
			}
		);
		return res.redirect(`/products/detail/${productUpdated.slug}?id=${productUpdated._id}`);
	}, 

	create: (req, res) => {
		return res.render('form');
	},

	store: async (req, res) => {
		let pdtoSlug = req.body.pdtoName.trim().replace(/ /g, '-').toLowerCase();

		let productStored = await Product.create({
			...req.body,
			slug: pdtoSlug,
			pdtoImage: req.file.filename
		});
		
		res.redirect(`/products/detail/${productStored.slug}?id=${productStored._id}`);
	}, 

	destroy: async (req, res) => {
		await Product.findOneAndRemove({ _id: req.params.id });
		return res.redirect('/');
	},

	api: (req, res) => {
		Product.find({}, (error, collection) => {
			res.json(collection);
		});
	}
}