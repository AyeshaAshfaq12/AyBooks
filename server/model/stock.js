const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    book_id: {
        type: Schema.Types.ObjectId, ref: 'Book',
        required: true
    },
    quantity: {
        type: Number,
        min: 0,
        required: true,
    },
    threshold: {
        type: Number,
        min: 0,
        required: true,
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


const Stock = mongoose.model('stock', stockSchema);

module.exports = Stock;
