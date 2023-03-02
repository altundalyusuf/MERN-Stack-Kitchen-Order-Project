const mongoose = require('mongoose');
const Joi = require('joi');

const orderSchema = new mongoose.Schema({
    roomID: { type: String, required: true },
    order: { type: Array, required: true },
});

const Order = mongoose.model('order', orderSchema);

const validate = (data) => {
    const schema = Joi.object({
        roomID: Joi.string().required().label("room id"),
        order: Joi.array().required().label("order")
        // order: Joi.string().required().label("order")
    })
    return schema.validate(data)
};

module.exports = { Order, validate };