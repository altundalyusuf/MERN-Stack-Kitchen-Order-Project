// const router = require("express").Router();
// var MongoClient = require('mongodb').MongoClient;


// router.get("/", async (req, res) => {
//     try {

//         MongoClient.connect(process.env.DB)
//             .then(function (client) {
//                 let db = client.db('kitchen-order')

//                 let change_streams = db.collection('orders').watch()
//                 change_streams.on('change', function (change) {
//                     // console.log(JSON.stringify(change));
//                     // console.log("db güncellendi lo");
//                     // res.redirect(req.get('referer'));
//                     window.location.reload();
//                 });
//             });

//     } catch (error) {
//         res.status(500).send({ message: "ay noluyo noluyo" });
//     }
// })

// module.exports = router;