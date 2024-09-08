const axios = require('axios');
const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(parser.json());

app.post('/events', async (req, res) => {
    const event = req.body;

    try {
        await Promise.all([
            axios.post('http://localhost:4000/events', event),
            axios.post('http://localhost:4001/events', event),
            axios.post('http://localhost:4002/events', event)
        ]);

        res.send({ status: 'ok' });
    } catch (error) {
        console.error('Error forwarding event:', error.message);
        res.status(500).send({ status: 'error', message: 'Failed to forward event' })
    }
});

app.listen(4005, () => {
    console.log('Server listening to Port 4005');
});
