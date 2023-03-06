const mongoose = require('mongoose');
const Joi = require('joi');

// Güncel tarih ve saati aldığım kısım
let currentDate = new Date().toLocaleDateString()
let currentTime = new Date()
var time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();


const orderSchema = new mongoose.Schema({
    roomID: { type: String, required: true },
    order: { type: Array, required: true },
    date: { type: String, default: currentDate },
    time: { type: String, default: time },
    active: { type: Boolean, default: true }
});

const Order = mongoose.model('order', orderSchema);

const validate = (data) => {
    const schema = Joi.object({
        roomID: Joi.string().required().label("room id"),
        order: Joi.array().required().label("order"),
    })
    return schema.validate(data)
};

module.exports = { Order, validate };