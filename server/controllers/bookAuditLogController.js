const express = require('express');
import asyncHandler from "express-async-handler";

require('../db/conn');

const BookAuditLog = require('../model/bookAuditLog');




const getAllBookLogs = asyncHandler(async (req, res) => {
  const logs = await BookAuditLog.find();
  if (logs) {
    res.status(200).json(logs);
  }
});



const deleteAllBookLogs = asyncHandler(async (req, res) => {
  const deleted = await BookAuditLog.deleteMany();
  if (deleted) {
    res.status(200).json(deleted);
  }
});

export {getAllBookLogs, deleteAllBookLogs};
