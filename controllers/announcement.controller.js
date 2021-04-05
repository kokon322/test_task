const {
    AnnouncementService: {getAllAnnouncements, getOneAnnouncementFromDB, createAnnouncement}
} = require('../services');

const {successMessage : {ANNOUNCEMENTS_IS_CREATE}} = require('../constants');

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

        res.json(_id).status(ANNOUNCEMENTS_IS_CREATE.status);
    } catch (err) {
        next(err);
    }
};

const getOneAnnouncement = async (req, res, next) => {
    try {
        const {query} = req;

        const {name, price, images: [mainPhoto]} = await getOneAnnouncementFromDB(query)

        res.json({name, price, mainPhoto});
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAnnouncements,
    createOneAnnouncement,
    getOneAnnouncement
};