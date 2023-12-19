const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order_detail_schema = new Schema({
    order_id: {
        type: Schema.Types.ObjectId, ref: 'Order',
        required: true
    },
    book_id: {
        type: Schema.Types.ObjectId, ref: 'Book',
        required: true
    },
    quantity: {
        type: Number,
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


const Order_detail = mongoose.model('order_detail', order_detail_schema);

module.exports = Order_detail;

