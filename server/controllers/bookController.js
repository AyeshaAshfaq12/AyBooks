const express = require('express');
const router = express.Router();

const fs = require('fs');

require('../db/conn');

const Book = require('../model/book');
const BookAuditLog = require('../model/bookAuditLog');


//===================  CREATE BOOK  =========================//

async function createBook(req, res) {

    const { ISBN, title, author, edition, category_id, price, publisher, img_path } = req.body;

    try {
        const bookExist = await Book.findOne({ ISBN: ISBN });
        if (bookExist) {
            return res.status(422).json({ error: "Book with this ISBN already exists" });
        }

        const book = new Book({ ISBN, title, author, edition, category_id, price, publisher, img_path });
        

        // const bookAdd = await book.save();
        if (await book.save()) {
            res.status(201).json({ message: 'Book added successfully' });
        }
        else {
            // else na bhi use kro, okay hai, cause error catch() me chla jaye ga
            res.status(500).json({ error: err });
        }

    } catch (err) {
        console.log(err);
    }
}

//===================  GET BOOKS  =========================//

async function getBooks(req, res) {

    try {
        const books = await Book.find({});
        window.alert("Meee");
        res.status(200).json({ status: 'Ok', data: books });

    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to fetch books' });
    }

}

//===================  DELETE BOOK  =========================//

async function deleteBook(req, res) {

    const id = req.params.id;
    
    try {
        const books = await Book.findByIdAndDelete({ _id: id});
        res.status(200).json({ status: 'Ok', data: books });

    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to delete book' });
    }

}

//===================  UPDATE BOOK  =========================//

async function findBookToUpdate(req, res) {

    const id = req.params.id;
    
    try {
        const books = await Book.findById({ _id: id});
        res.status(200).json({ status: 'Ok', data: books });

    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to update book' });
    }

}

async function updateBook(req, res) {

    const id = req.params.id;

    const { title, author, edition, price, publisher} = req.body;
    
    try {
        const books = await Book.findByIdAndUpdate({ _id: id}, {title, author, edition, price, publisher});
        res.status(200).json({ status: 'Ok', data: books });

    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to update book' });
    }

}



module.exports = {
    createBook,
    getBooks,
    deleteBook,
    findBookToUpdate,
    updateBook,
};

