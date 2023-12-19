const express = require('express');
const router = express.Router();

require('../db/conn');

const Customer = require('../model/customer');
const Credential = require('../model/credentials');


//===================  CREATE CUSTOMER  =========================//

async function createCustomer(req, res) {

    const { name, CNIC, address, debit_card, mm_yy, cvc, phone, email, password } = req.body;

    const customer = new Customer({ name, CNIC, address, debit_card, mm_yy, cvc, phone });
    try {
        const customerExist = await Customer.findOne({ CNIC: CNIC });
        if (customerExist) {
            return res.status(422).json({ error: "Customer with this CNIC already exists" });
        }
        const savedCustomer = await customer.save();
        const credential = new Credential({ email, password, user_id: savedCustomer._id });
        if (await credential.save()) {
            res.status(201).json({
                message: 'Customer and Credential added successfully'
            });
        }
    } catch (err) {
        console.log(err);
    }
};


//===================  GET CUSTOMERS  =========================//

async function getCustomer(req, res) {

    try {
        const customers = await Customer.find({});
        res.status(200).json({ status: 'Ok', data: customers });

    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to fetch customers' });
    }

}

//===================  DELETE CUSTOMER  =========================//

async function deleteCustomer(req, res) {
    const id = req.params.id;

    try {
        const customer = await Customer.findByIdAndDelete({ _id: id });
        res.status(200).json({ status: 'Ok', data: customer });

    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to delete Customer' });
    }
}


module.exports = {
    createCustomer,
    getCustomer,
    deleteCustomer,
};


