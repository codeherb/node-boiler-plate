const mongoose = require('mongoose')

/** 
 * 스키마 : 데이터 베이스의 구조와 제약 조건의 명세를 담고 있는 메타 데이터
 * 데이터 사전이라고 불리는 특별한 영역에 저장되며, 시간에 따라 불변이다.
 * 크게 외부 / 개념 / 내부 스키마로 나뉜다.
 * 일반적으로 스키마 라고 하면 개념 스키마를 나타낸다.
 * 
 * 몽구스에서의 스키마는 데이터 베이스 내의 테이블의 구조를 의미하며 이는 외부 스키마에 해당한다.
 * */ 
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

/**
 * 몽구스를 통해 테이블을 생성하며 이때 정의한 스키마를 참조한다.
 */
const User = mongoose.model('User', userSchema)
// 자바 스크립트 내의 다른 영역에서 유저 모델을 사용 가능 하도록 익스포트 한다.
module.exports = { User }