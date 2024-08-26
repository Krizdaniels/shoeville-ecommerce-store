const express = require('express');
const userRouter = require('./routers/user');
const itemRouter = require('./routers/item');
const cartRouter = require('./routers/cart');
const paymentRouter = require('./routers/payment'); // Add the payment router
require('./db/mongoose');

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(itemRouter);
app.use(cartRouter);
app.use(paymentRouter); // Use the payment router

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});