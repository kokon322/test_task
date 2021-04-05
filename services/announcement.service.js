const {Announcement: {Announcement}} = require('../dataBase');
const {sortConstant: {BIGGEST_PRICE, MINIMUM_PRICE, BIGGEST_DATA, MINIMUM_DATA}} = require('../constants');

//example url : http://localhost:5000/announcements/?biggestPrice&&page=1

const getAllAnnouncements = async (query = {}) => {
    const {limit = 10, page = 1, ...filters} = query;

    const skip = (page - 1) * limit;

    const keys = Object.keys(filters);

    const sortObject = {};

    keys.forEach(key => {
        switch (key) {
            case BIGGEST_PRICE:
                sortObject.price = -1;
                break;
            case MINIMUM_PRICE:
                sortObject.price = 1;
                break;
            case BIGGEST_DATA:
                sortObject.createdAt = -1;
                break;
            case MINIMUM_DATA:
                sortObject.createdAt = 1;
                break;
            default :
                sortObject[key] = filters[key]
        }
    })
    const announcements = await Announcement.find().limit(limit).skip(skip).sort(sortObject);

    const result = announcements.map(({name, price, images: [mainPhoto]}) => {
        return {name, price, mainPhoto};
    });

    return result;
};

const getOneAnnouncementFromDB = async (query) => {
    if ('fields' in query) {
        const withFields = await Announcement.findOne({_id: query._id});

        return withFields;
    } else {
        const {name, price, images: [mainPhoto]} = await Announcement.findOne(query);

        return {name, price, mainPhoto};
    }
};

const createAnnouncement = (announcement) => Announcement.create(announcement);

module.exports = {
    getAllAnnouncements,
    getOneAnnouncementFromDB,
    createAnnouncement
};