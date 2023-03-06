const router = require("express").Router();
const { Order } = require("../models/order");

router.get("/", async (req, res) => {
    try {

        let allData = await Order.find({ active: true });
        res.status(201).send({ data: allData, message: "All data is successfully viewed." })

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

module.exports = router;