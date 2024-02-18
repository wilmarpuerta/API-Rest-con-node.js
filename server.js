const express = require('express');

const app = express();

const port = 3002;
app.get('/', (req, res) => {
    res.send({
        data: 'Hello word'
    })
})

app.listen(port, () => {
    console.log('La aplicacion esta en linea');
})