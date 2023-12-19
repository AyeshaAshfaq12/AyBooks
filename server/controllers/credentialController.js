const express = require('express');
const router = express.Router();

require('../db/conn');

const Credential = require('../model/credentials');


//===================  FIND CREDENTIAL  =========================//

async function findCredential(req, res) {
    const email = req.params.email;

    try {
        const credential = await Credential.findOne({ email: email });
        res.status(200).json({ status: 'Ok', data: credential });


    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to authenticate credential' });
    }

}


module.exports = {
    findCredential,
};


