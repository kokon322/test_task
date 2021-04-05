const {
    AnnouncementService:
        {
            getAllAnnouncements,
            getOneAnnouncementFromDB,
            createAnnouncement
        }
} = require('../services');

const getAnnouncements = async (req, res, next) => {
    try {
        const announcements = await getAllAnnouncements(req.query);

        res.json(announcements);
    } catch (err) {
        next(err);
    }
};

const createOneAnnouncement = async (req, res, next) => {
    try {
        const {_id} = await createAnnouncement(req.body);

        res.json(_id).status(200);
    } catch (err) {
        next(err);
    }
};

const getOneAnnouncement = async (req, res, next) => {
    try {
        const {query} = req;

        const {name, price, images: [first]} = await getOneAnnouncementFromDB(query)

        res.json({name, price, first});
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAnnouncements,
    createOneAnnouncement,
    getOneAnnouncement
};