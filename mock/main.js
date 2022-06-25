const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/v1/members/login', (req, res) => {
    const accessToken = req.body.uuid;

    res.json({ data: {accessToken} });
});

app.get('/v1/members/search', (req, res) => {
    // 37.5108295,127.0292881
    const members = [
        {
            id: 'm1',
            nickname: '라라',
            tags: [{id: 'tag1', text: '개발자'}],
            latitude: 37.5108295,
            longitude: 127.0292881,
            distance: 70
        },
        {
            id: 'm2',
            nickname: '치이타',
            tags: [{id: 'tag2', text: '디자이너'}],
            latitude: 37.5112295,
            longitude: 127.0292881,
            distance: 30
        },
        {
            id: 'm3',
            nickname: '파이',
            tags: [{id: 'tag3', text: '기획자'}],
            latitude: 37.5104295,
            longitude: 127.0290881,
            distance: 50
        },
        {
            id: 'm4',
            nickname: 'BIBA',
            tags: [{id: 'tag4', text: '오늘의집'}],
            latitude: 37.5104295,
            longitude: 127.0292881,
            distance: 20
        },
    ];

    res.json({ data:  members });
});

app.get('/v1/tags', (req, res) => {
    const result = [
        {id: 'tag1', tagName: '개발자'},
        {id: 'tag2', tagName: '디자이너'},
        {id: 'tag3', tagName: '기획자'},
        {id: 'tag4', tagName: '오늘의집'},
        {id: 'tag5', tagName: '당근마켓'},
    ];

    res.json({data:result});
});

app.get('/v1/members/me', (req, res) => {
    res.json({
        data: {
            nickname: '아브라카다브라',
            tags: [{id: 'tag4', tagName: '오늘의집'}],
        }
    });
});

app.put('/v1/members/me/coordinate', (req, res) => {
    res.status(200).send('');
});

app.post('/v1/chat-rooms', (req, res) => {
    res.status(200).send({data:{chatId: 'm1'}});
});

app.listen(4000, () => {
    console.log('mock started...');
});
