const express = require('express');
const initDB = require('./config/db')
const userRouter = require('./app/routers/user')
const itemsRouter = require('./app/routers/items')
const app = express();

const port = 3002;

app.use(userRouter);
app.use(itemsRouter);

app.listen(port, () => {
    console.log('La aplicacion esta en linea');
})

