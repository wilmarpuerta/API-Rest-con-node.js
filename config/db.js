const mongoose = require('mongoose');

const DB_URI = `http://localhost:3000`

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrelParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log('DB: ERROR!!!')
                }
                else {
                    console.log('Conecion correcta!!!')
                }
            }
        )
    }
    connect();
}