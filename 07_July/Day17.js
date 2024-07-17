//seerving static files in js

// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const {I18n} = require('i18n');


const app = express();
const PORT = process.env.PORT || 5000;

const i18n = new I18n({
    locales: ['en', 'np'],
    directory: path.join(__dirname, 'translation'),
    defaultLocale: 'np'
})

app.use(i18n.init)

app.get('/get-language', async (req, res) => {
    const message = res.__('message');
    res.status(200).json({
        status: 'success',
        message
    })
    console.log(message);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
