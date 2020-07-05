const express = require('express')  // 익스프레스 모듈 임포트
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require('./models/User')
const config = require('./config/key')

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
// application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// Router Handler 등록 : request와 어플리케이션 로직에 대한 맵핑을 정의
app.get('/', (req, res) => res.send('Hello World! 안녕~ What\'s up'))
app.post('/register', (req, res) => {
    // 회원 가입 할때 필요한 정보들을 client에서 가져와 데이터베이스에 넣어준다.
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.json({ success: true })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))