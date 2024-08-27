const express = require('express');
const router = express.Router();
const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave(
    process.env.FLW_PUBLIC_KEY,
    process.env.FLW_SECRET_KEY
);

router.post('/pay', async (req, res) => {
    try {
        const payload = {
            tx_ref: "tx-" + Date.now(),
            amount: req.body.amount,
            currency: req.body.currency || 'USD',
            redirect_url: 'https://kerado.com/payment-status',
            payment_type: 'card',
            customer: {
                email: req.body.email,
                phonenumber: req.body.phonenumber,
                name: req.body.name
            },
            customizations: {
                title: 'Shoeville Store',
                description: 'Payment for items in cart',
                logo: 'https://imgur.com/KqzbZDW'
            }
        };

        const response = await flw.Charge.card(payload);

        if (response.status === 'success') {
            res.redirect(response.data.link); // Redirect to the Flutterwave payment page
        } else {
            res.status(400).send({ error: 'Payment initiation failed' });
        }
    } catch (error) {
        console.error('Payment error:', error);
        res.status(500).send({ error: 'An error occurred during payment' });
    }
});

module.exports = router;
