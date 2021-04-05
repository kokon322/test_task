const {Announcement: {Announcement}} = require('../dataBase');

const getAllAnnouncements = () => Announcement.find();

const getOneAnnouncement = (query) => Announcement.findOne(query);

const createAnnouncement = (announcement) => Announcement.create(announcement);

module.exports = {
    getAllAnnouncements,
    getOneAnnouncement,
    createAnnouncement
};