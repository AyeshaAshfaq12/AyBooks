const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    CNIC: {
        type: String,
        unique: true,
        minLength: 13,
        maxLength: 13,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    debit_card: {
        type: String,
        minLength: 16,
        maxLength: 16,
        required: true
    },
    mm_yy: {
        type: String,
        minLength: 4,
        maxLength: 4,
        required: true
    },
    cvc: {
        type: String,
        minLength: 3,
        maxLength: 4,
        required: true
    },
    phone: {
        type: String,
        minLength: 11,
        maxLength: 11,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },

},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);


const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;

