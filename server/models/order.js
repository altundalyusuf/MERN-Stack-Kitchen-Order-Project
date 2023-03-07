const mongoose = require('mongoose');
const Joi = require('joi');


const orderSchema = new mongoose.Schema({
    roomID: { type: String, required: true },
    order: { type: Array, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    active: { type: Boolean, default: true }
});

const Order = mongoose.model('order', orderSchema);

const validate = (data) => {
    const schema = Joi.object({
        roomID: Joi.string().required().label("room id"),
        order: Joi.array().required().label("order"),
        date: Joi.string().required().label("date"),
        time: Joi.string().required().label("time"),
    })
    return schema.validate(data)
};

module.exports = { Order, validate };