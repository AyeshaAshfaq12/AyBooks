const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer_id: {
        type: Schema.Types.ObjectId, ref: 'Customer',
        required: true
    },
    order_date: {
        type: Date,
        required: true
    },
    required_date: {
        type: Date,
        required: true
    },
    shipped_date: {
        type: Date,
        default: null
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


const Order = mongoose.model('order', orderSchema);

module.exports = Order;

