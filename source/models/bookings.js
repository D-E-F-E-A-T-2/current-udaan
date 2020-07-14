const mongoose = require("mongoose");
const validator = require("validator");

const bookingSchema = new mongoose.Schema({
    email: { // Because Email is Unique!
        type: String,
        required: true
    },
    movieName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
