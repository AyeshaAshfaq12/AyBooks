const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    order_id: {
        type: Schema.Types.ObjectId, ref: 'Order',
        required: true
    },
    amount: {
        type: Number,
        min: 0,
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


const Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;

