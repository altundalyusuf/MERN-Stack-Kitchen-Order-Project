const router = require("express").Router();
const { Order } = require("../models/order");

router.put("/", async (req, res) => {
    try {
        await Order.findOneAndUpdate({ roomID: req.body.roomID, order: req.body.order }, { active: false }, { new: true });
        res.status(201).send({ message: "Order completed and made passive in DB." })

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

module.exports = router;