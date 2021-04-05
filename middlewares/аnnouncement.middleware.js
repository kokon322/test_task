const {ErrorHandler} = require("../errorHandler");
const {announcementsValidator} = require('../validators');

const {errorMessage: {NOT_VALID_ANNOUNCEMENTS}} = require('../constants');

const isAnnouncementsValid = async (req, res, next) => {
    try {
        const {error} = await announcementsValidator.validate(req.body);
        console.log(error);
        if (error) {
            throw new ErrorHandler(NOT_VALID_ANNOUNCEMENTS.status, NOT_VALID_ANNOUNCEMENTS.message);
        }
        next();
    } catch (e) {
        next(e);
    }
};

module.exports = {
    isAnnouncementsValid
}