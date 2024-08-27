const express = require('express');
const userRouter = require('./routers/user');
const itemRouter = require('./routers/item');
const cartRouter = require('./routers/cart');
const paymentRouter = require('./routers/payment'); // Add the payment router
require('./db/mongoose');

const port = process.env.PORT || 3000; // Default to port 3000 if not specified

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/items', itemRouter);
app.use('/carts', cartRouter);
app.use('/payments', paymentRouter); // Use the payment router

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});