const express = require('express');
const router = express.Router();

/*=== MIDDLEWARES ===*/ 
const upload = require('../middlewares/uploadMiddleware');

/*=== CONTROLLER ===*/ 
const controller = require('../controllers/productsController');

router.get('/', controller.index);

router.get('/detail/:name', controller.show);

router.get('/edit/:name', controller.edit);
router.post('/edit/:id', upload.single('pdtoImage'), controller.update);

router.get('/create', controller.create);
router.post('/create', upload.single('pdtoImage'), controller.store);

router.post('/delete/:id', controller.destroy);

router.get('/api', controller.api);

module.exports = router;
