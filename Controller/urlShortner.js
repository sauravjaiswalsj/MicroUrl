//const { nanoid } = require('nanoid');
const Url = require('../Models/urlModel');

const baseUrl = process.env.baseUri;


const urlShortner = async (req, res) => {
    try {
        const { longUrl } = req.body;

        const shortUrlId = Math.floor(Math.random(longUrl.length) * longUrl.length * 1000);

        const ifUrlExist = await Url.findOne({ where: { longUrl: longUrl } });

        if (ifUrlExist) {
            return res.status(302).json({
                status: "Not ok",
                shortUrl: `${baseUrl}/${ifUrlExist.shortUrl}`,
            });
        }

        const shortendUrl = await Url.create({ longUrl, shortUrl: shortUrlId });

        console.log(shortendUrl)

        return res.status(201).json({
            status: "ok",
            shortUrl: `${baseUrl}/${shortendUrl.shortUrl}`,
        });

    } catch (err) {
        console.error(`Failed: ${err}`);
        return res.status(500).send(err);
    }
}

module.exports = urlShortner;