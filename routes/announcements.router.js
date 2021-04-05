const router = require('express').Router();

const {
    announcementsController: {
        getAnnouncements,
        createOneAnnouncement,
        getOneAnnouncement
    }
} = require('../controllers');

const {announcementsMiddleware: {isAnnouncementsValid}} = require('../middlewares');

router
    .post('/', isAnnouncementsValid, createOneAnnouncement)
    .get('/', getAnnouncements)
    .get('/oneAnnouncement', getOneAnnouncement)

module.exports = router;