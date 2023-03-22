const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
    albumName: { type: String },
    artist: { type: String },
    releaseYear: { type: Number },
    genre: { type: String },
    // explicit: { type: Boolean }
}, { timestamps: true });

module.exports = mongoose.model('Record', RecordSchema);
