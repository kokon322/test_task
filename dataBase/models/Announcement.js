const {Schema, model} = require('mongoose');

const announcementSchema = new Schema({
    name: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    images: {type: Array, required: true}
},{timestamps: true});

module.exports = model('Announcement', announcementSchema);