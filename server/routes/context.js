const router = require("express").Router();
const { Order } = require("../models/order");

router.get("/", async (req, res) => {
    try {

        let allData = await Order.find({});
        res.status(201).send({ data: allData, message: "All data is successfully viewed." })

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

router.post("/postMongo", async (req, res) => {
    console.log('this is post to mongo page')
    // try {
    //     await new Order({ ...req.body }).save();
    //     res.status(201).send({ message: "Order created successfully." })

    // } catch (error) {
    //     res.status(500).send({ message: "Internal Server Error" });
    // }
})


module.exports = router;