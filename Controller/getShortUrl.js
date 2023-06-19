const Url = require('../Models/urlModel');

const getShortUrl = async (req, res) => {
    try {
        const { id } = req.params;

        const ifUrlExist = await Url.findOne(
            {
                where:
                {
                    shortUrl: id
                },
                attributes: ['longUrl']
            }
        )

        if (!ifUrlExist) {
            return res.redirect('/');
        }

        return res.redirect(ifUrlExist.longUrl);
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports = getShortUrl;