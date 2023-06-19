const path = require('path');

const home = (req, res) => {

    const htmlPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(htmlPath);
}

module.exports = home;