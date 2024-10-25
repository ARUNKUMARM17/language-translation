const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    translations: [
        {
            text: String,
            translatedText: String,
            sourceLang: String,
            targetLang: String,
            date: { type: Date, default: Date.now },
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
