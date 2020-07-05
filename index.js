const express = require('express')  // 익스프레스 모듈 임포트
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yakcho:y9WZb6LKDSYY8BS@boiler-plate-cluster.pk8n6.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 안녕~'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))