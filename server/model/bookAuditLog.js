const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookAuditLogSchema = new Schema({
    action: {
        type: String,
        require: true,
    },
    ISBN: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },

},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);


const BookAuditLog = mongoose.model('bookAuditLog', bookAuditLogSchema);

module.exports = BookAuditLog;
