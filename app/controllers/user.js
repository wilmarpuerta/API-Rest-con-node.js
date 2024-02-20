const model = require('../../models/user')

exports.getData = (req, res) => {
    model.find()
        .then((res) => {
            res.status(200).json(res);
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}
