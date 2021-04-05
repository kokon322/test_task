const router = require('express').Router();

const announcementsRouter = require('./announcements.router');

router.use('/announcements', announcementsRouter);

module.exports = router;