const express = require('express');
const router = express.Router();

require('../db/conn');

const Category = require('../model/category');


//===================  CREATE CATEGORY  =========================//

async function createCategory(req, res) {

    const { name } = req.body;

    if (!name) {
        return res.status(422).json({ error: "Fill all fields" });
    }

    try {
        const categoryExist = await Category.findOne({ name: name });
        if (categoryExist) {
            return res.status(422).json({ error: "Category with this name already exists" });
        }

        const category = new Category({ name });
        if (await category.save()) {
            res.status(201).json({ message: 'Category added successfully' });
        }
        else {
            // else na bhi use kro, okay hai, cause error catch() me chla jaye ga
            res.status(500).json({ error: err });
        }

    } catch (err) {
        console.log(err);
    }

}


//===================  GET CATEGORY  =========================//

async function getCategory(req, res) {

    try {
        const categories = await Category.find({});
        res.status(200).json({ status: 'Ok', data: categories });

    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to fetch categories' });
    }

}


//===================  DELETE CATEGORY  =========================//

async function deleteCategory(req, res) {

    const id = req.params.id;
    
    try {
        const category = await Category.findByIdAndDelete({ _id: id});
        res.status(200).json({ status: 'Ok', data: category });

    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to delete Category' });
    }

}



module.exports = {
    createCategory,
    getCategory,
    deleteCategory,
};

