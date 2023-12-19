const express = require('express');
const router = express.Router();

require('../db/conn');

const categoryController = require('../controllers/categoryController');


//===================  CREATE CATEGORY  =========================//

router.post('/createCategory', categoryController.createCategory);

//===================  GET CATEGORY  =========================//

router.get('/category', categoryController.getCategory);

//===================  DELETE BOOK  =========================//

router.delete('/deleteCategory/:id', categoryController.deleteCategory);



module.exports = router;
