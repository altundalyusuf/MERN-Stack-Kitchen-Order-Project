const router = require("express").Router();
const { Order } = require("../models/order");

router.post("/", async (req, res) => {
    try {
        await Order.deleteOne({ roomID: req.body.roomID, order: req.body.order });
        res.status(201).send({ message: "Order DELETED successfully." })

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

module.exports = router;