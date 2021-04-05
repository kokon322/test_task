const {Announcement: {Announcement}} = require('../dataBase');

const getAllAnnouncements = async (query = {}) => {
    const {limit = 10, page = 1, ...filters} = query;

    const skip = (page - 1) * limit;

    const keys = Object.keys(filters);

    const sortObject = {};

    keys.forEach(key => {
        switch (key) {
            case 'biggestPrice':
                sortObject.price = -1;
                break;
            case 'minimumPrice':
                sortObject.price = 1;
                break;
            case 'biggestData':
                sortObject.createdAt = -1;
                break;
            case 'minimumData':
                sortObject.createdAt = 1;
                break;
            default :
                sortObject[key] = filters[key]
        }
    })
    const announcements = await Announcement.find().limit(limit).skip(skip).sort(sortObject);

    const result = announcements.map(({name, price, images: [first]}) => {
        return {name, price, first};
    });
    return result;
};

const getOneAnnouncementFromDB = (query) => Announcement.findOne(query);

const createAnnouncement = (announcement) => Announcement.create(announcement);

module.exports = {
    getAllAnnouncements,
    getOneAnnouncementFromDB,
    createAnnouncement
};