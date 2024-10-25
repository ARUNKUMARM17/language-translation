const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');

// Signup route
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get user translations
router.get('/:username/translations', async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username });
        res.json(user.translations);
    } catch (err) {
        res.status(404).json({ error: 'User not found' });
    }
});

// Save translation
router.post('/:username/translations', async (req, res) => {
    const { username } = req.params;
    const { text, translatedText, sourceLang, targetLang } = req.body;

    try {
        await User.updateOne(
            { username },
            { $push: { translations: { text, translatedText, sourceLang, targetLang } } }
        );
        res.status(200).send('Translation saved');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
