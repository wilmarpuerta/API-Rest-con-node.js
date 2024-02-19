const mongose = require('mongoose');

const UserScheme = new mongose.Schema(
    {
        name: {
            type: String
        },
        avatar: {
            type: String
            // default: 'https://image.com'
        },
        email: {
            type: String,
            unique: true,
            required: true
        }
    }
)

module.exports = mongose.model('user', UserScheme)