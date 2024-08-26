const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const Cart = require('../models/cart');
const Order = require('../models/order');
const Flutterwave = require('flutterwave-node-v3');

// Initialize Flutterwave with the provided test keys
const flw = new Flutterwave(
    process.env.FLW_PUBLIC_KEY || 'FLWPUBK_TEST-782d90611c9fcde170c42662f9f57c6c-X',
    process.env.FLW_SECRET_KEY || 'FLWSECK_TEST-9ac2648c8e894e11f95e56c1aec6cf9e-X'
);

router.post('/checkout', auth, async (req, res) => {
    try {
        // Get the user's ID from the authentication middleware
        const owner = req.user._id;

        // Extract the payment details from the request body
        const { payment_method, amount, currency, redirect_url } = req.body;

        // Find the user's cart
        const cart = await Cart.findOne({ owner });

        if (!cart || cart.items.length === 0) {
            return res.status(400).send({ error: 'Your cart is empty' });
        }

        // Calculate the total amount from the cart items
        const totalAmount = cart.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );

        // Prepare the payload for the Flutterwave charge
        const payload = {
            tx_ref: "tx-" + Date.now(), // Unique transaction reference
            amount: totalAmount,
            currency: currency || 'USD',
            redirect_url: redirect_url || 'https://kerado.com/payment',
            payment_type: payment_method || 'card',
            customer: {
                email: req.user.email,
                phonenumber: req.user.phone,
                name: `${req.user.firstName} ${req.user.lastName}`
            },
            customizations: {
                title: 'Shoeville Store',
                description: 'Payment for items in cart',
                logo: 'https://imgur.com/KqzbZDW'
            }
        };

        // Process the payment using Flutterwave
        const response = await flw.Charge.card(payload);

        if (response.status === 'success') {
            // If payment is successful, create an order
            const order = new Order({
                owner,
                items: cart.items,
                total: totalAmount
            });
            await order.save();

            // Clear the user's cart after successful payment
            await Cart.findOneAndDelete({ owner });

            res.status(201).send({ order, message: 'Payment successful, order created' });
        } else {
            res.status(400).send({ error: 'Payment failed' });
        }
    } catch (error) {
        console.error('Checkout error:', error);
        res.status(500).send({ error: 'Something went wrong with the checkout process' });
    }
});

module.exports = router;
