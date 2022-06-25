const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/v1/members/login', (req, res) => {
    const accessToken = req.body.uuid;

    res.json({ accessToken });
});

app.listen(4000, () => {
    console.log('mock started...');
});
