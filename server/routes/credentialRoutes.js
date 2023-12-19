const express = require('express');
const router = express.Router();

require('../db/conn');

const credentialController = require('../controllers/credentialController');

//===================  FIND CREDENTIAL  =========================//

router.post('/getCredential/:email', credentialController.findCredential);



module.exports = router;
