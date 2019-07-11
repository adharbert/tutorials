const express = require("express");
const router = express.Router();
const faker = require("faker");


// ==============================================================
// @route       GET <root>/api/cars
// @desc        Get a list of cars
// @access      Public
router.get("/", function(req, res) {
    console.log("Cars get called");

    const fordItem = { type: 'Ford', model: 'Mustang', price: 35000 };
    const chevyItem = { type: 'Chevy', model: 'Corvette', price: 85000 };
    const dodgeItem = { type: 'Dodge', model: 'Charger', price: 42000 };
    const bmwItem = { type: 'BMW', model: 'M5', price: 95000 };
    const audiItem = { type: 'Audi', model: 'A8', price: 88000 };
    const vwItem = { type: 'VW', model: 'Arteon', price: 70000 };
    
    const carArray = [fordItem, chevyItem, dodgeItem, bmwItem, audiItem, vwItem];


    let results = [];
    let rowCount = Math.random() * (100 - 50) + 50;
    for(i = 0; i < rowCount; i++) {
        let item = carArray[Math.floor(Math.random() * carArray.length)];
        results.push({
            make: item.type,
            model: item.model,
            price: item.price
        });
    }
    
    res.status(200).send(results);

});


module.exports = router;