const router = require('express').Router();

const {announcementsController: {getAnnouncements, createOneAnnouncement, getOneAnnouncement}} = require('../controllers');

router
    .post('/', createOneAnnouncement)
    .get('/', getAnnouncements)
    .get('/oneAnnouncement', getOneAnnouncement)

module.exports = router;