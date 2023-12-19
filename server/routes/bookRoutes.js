const express = require('express');
const router = express.Router();

require('../db/conn');

const bookController = require('../controllers/bookController');

//===================  CREATE BOOK  =========================//

router.post('/createBook', bookController.createBook);

//===================  GET BOOK  =========================//

router.get('/book', bookController.getBooks);

//===================  DELETE BOOK  =========================//

router.delete('/deleteBook/:id', bookController.deleteBook);

//===================  UPDATE BOOK  =========================//

router.get('/getBook/:id', bookController.findBookToUpdate);

router.put('/updateBook/:id', bookController.updateBook);



module.exports = router;
