const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
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


const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;
