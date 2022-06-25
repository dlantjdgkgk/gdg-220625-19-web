const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/v1/members/login', (req, res) => {
    const accessToken = req.body.uuid;

    res.json({ accessToken });
});

app.post('/v1/members/search', (req, res) => {
    const members = [
        {memberId: 'm1', nickname: '라라', tag: '디자이너', lat: 0, lng: 0, distance: 70},
        {memberId: 'm2', nickname: '치이타', tag: '프론트', lat: 0, lng: 0, distance: 30},
        {memberId: 'm3', nickname: '파이', tag: '기획자', lat: 0, lng: 0, distance: 50},
        {memberId: 'm4', nickname: 'BIBA', tag: '백엔드', lat: 0, lng: 0, distance: 20},
    ];

    res.json({ result: members });
});

app.listen(4000, () => {
    console.log('mock started...');
});
