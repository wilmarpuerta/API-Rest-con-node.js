const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://wilmarandrespuertajaramillo:Vy4YOFlRCUKojwEk@cluster0.qbpisik.mongodb.net/?retryWrites=true&w=majority")

const UserSchema = new mongoose.Schema({
    username: String,
    imguser: String,
    password: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: String,
    birthday: String,
    money: Number,
    posts: [String]
});


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
