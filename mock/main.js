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
    // 37.5108295,127.0292881
    const members = [
        {memberId: 'm1', nickname: '라라', tag: '디자이너', lat: 37.5108295, lng: 127.0292881, distance: 70},
        {memberId: 'm2', nickname: '치이타', tag: '프론트', lat: 37.5112295, lng: 127.0292881, distance: 30},
        {memberId: 'm3', nickname: '파이', tag: '기획자', lat: 37.5104295, lng: 127.0290881, distance: 50},
        {memberId: 'm4', nickname: 'BIBA', tag: '백엔드', lat: 37.5104295, lng: 127.0292881, distance: 20},
    ];

    res.json({ result: members });
});

app.get('/v1/tags', (req, res) => {
    const result = [
        {id: 'tag1', text: '개발자'},
        {id: 'tag2', text: '디자이너'},
        {id: 'tag3', text: '기획자'},
        {id: 'tag4', text: '오늘의집'},
        {id: 'tag5', text: '당근마켓'},
    ];

    res.json({result});
});

app.get('/v1/members/me', (req, res) => {
    res.json({
        nickname: '아브라카다브라',
        tag: 'tag4',
        alertOn: false,
    });
});

app.put('/v1/members/me/coordinate', (req, res) => {
    res.status(200).send('');
});

app.listen(4000, () => {
    console.log('mock started...');
});
