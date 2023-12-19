const express = require('express');
const router = express.Router();

require('../db/conn');

const bookAuditLogController = require('../controllers/bookAuditLogController');


router.get("/", protect, bookAuditLogController.getAllBookLogs);
router.delete("/deleteAll", protect, bookAuditLogController.deleteAllBookLogs);


module.exports = router;
