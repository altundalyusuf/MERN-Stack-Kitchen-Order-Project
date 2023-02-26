const router = require("express").Router();
const { Order, validate } = require("../models/order");

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        await new Order({ ...req.body }).save();
        res.status(201).send({ message: "Order created successfully." })

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})


module.exports = router;