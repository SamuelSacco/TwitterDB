const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);

// RAPH SAYS WE NEED THIS
// "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjNhNDE2OGIxOGU3M2E2NDc3ZjBjMSIsImhhbmRsZSI6IlwicmFwaFwiIiwiaWF0IjoxNjI2NTgwMzAxLCJleHAiOjE2MjY1ODM5MDF9.VjHy1JjjheI_o9N9hGBOaRvxcMyYwPozoauLMfpp99s"