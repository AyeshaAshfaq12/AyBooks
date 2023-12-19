const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    book_id: {
        type: Schema.Types.ObjectId, ref: 'Book',
        required: true
    },
    customer_id: {
        type: Schema.Types.ObjectId, ref: 'Customer',
        required: true
    },
    comment: {
        type: String,
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


const Review = mongoose.model('review', reviewSchema);

module.exports = Review;

