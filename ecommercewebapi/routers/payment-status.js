router.get('/payment-status', async (req, res) => {
    const transactionId = req.query.transaction_id;

    try {
        // Verify the transaction with Flutterwave
        const response = await flw.Transaction.verify({ id: transactionId });

        if (response.status === 'success' && response.data.status === 'successful') {
            // Payment was successful, process the order
            res.send('Payment was successful!');
        } else {
            res.send('Payment failed or was not completed.');
        }
    } catch (error) {
        console.error('Payment status error:', error);
        res.status(500).send({ error: 'Error verifying payment status' });
    }
});
