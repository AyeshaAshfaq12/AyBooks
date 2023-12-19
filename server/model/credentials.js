const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const credentialsSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    is_admin: {
        type: Boolean,
        default: false
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


const Credentials = mongoose.model('credential', credentialsSchema);

module.exports = Credentials;
