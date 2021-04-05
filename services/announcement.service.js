const {Announcement: {Announcement}} = require('../dataBase');

const getAllAnnouncements = () => Announcement.find();

const getOneAnnouncementFromDB = (query) => Announcement.findOne(query);

const createAnnouncement = (announcement) => Announcement.create(announcement);

module.exports = {
    getAllAnnouncements,
    getOneAnnouncementFromDB,
    createAnnouncement
};