const faker = require('faker');
const Product = require('../models/product');

Product.find({}, (err, collection) => {
	if (err) console.log(`Error: ${err}`);
	else {
		if (collection.length <= 0) {
			for (let i = 1; i <= 12; i++) {
				var pdtoName = faker.commerce.productName();
				var pdtoSlug = pdtoName.replace(/ /g, '-').toLowerCase();
				Product.create({
					slug: pdtoSlug,
					pdtoName: pdtoName,
					pdtoPrice: faker.commerce.price(),
					pdtoDesc: faker.lorem.sentence(),
					pdtoLongDesc: faker.lorem.sentences(),
					pdtoImage: 'no-image.png'
				}, (err, result) => {
					if (err) console.log(`Error: ${err}`);
				});
			}
		}
	}
});
