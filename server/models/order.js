const mongoose = require('mongoose');
const Joi = require('joi');

// mongoose tarih ve saati UTC olarak kaydettiği için bulunulan konumun bölge saatine göre ayarladım
let current = new Date();
const timeStamp = new Date(Date.UTC(current.getFullYear(),
    current.getMonth(), current.getDate(), current.getHours(),
    current.getMinutes(), current.getSeconds(), current.getMilliseconds()));

const orderSchema = new mongoose.Schema({
    roomID: { type: String, required: true },
    order: { type: Array, required: true },
    date: { type: Date, default: timeStamp },
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