const express = require("express");

const productRouter = express.Router();

const fs = require("fs");
const { entryMiddleware } = require("../middlewares/entryMiddleware");

// PRODUCTS


productRouter.get("/", (req, res) => {
    console.log("MEWTHOD",req.method)
    // const data = JSON.parse(fs.readFileSync("./db.json"));

    // DATA WE CAN't READ -> (JSON.parse()) -> Data that we can read    
    res.send(data.products);
})

// WRITE 

// POST -> Creating New Entry
productRouter.post("/", (req, res) => {
    // LOGIC STEP 

    console.log("MEWTHOD",req.method)
    // 1.  READ the
    // 2.  Create new data
    // 3.  Save the Data
    const data = JSON.parse(fs.readFileSync("./db.json"));

    const body = req.body;

    console.log("BODY", body);
    // {  id : number, name:string }
    data.products.push(body);

    const updatedData = fs.writeFileSync("./db.json", JSON.stringify(data));

    res.send("DATA IS UPDATED");

})

// PUT , DELETE

// PUT => Update

productRouter.put("/:id", (req, res) => {
    const id = req.params.id;

    console.log("MEWTHOD",req.method)
    const body = req.body; // {name:string}

    // 1. Read Data
    // 2. Find the data with the same id
    // 3. Update

    const data = JSON.parse(fs.readFileSync("./db.json"));

    const isUpdated = false;

    data.products.forEach((el) => {
        if (el.id == id) {
            el.name = body.name;
            isUpdated = true;
        }
    })

    const updatedData = fs.writeFileSync("./db.json", JSON.stringify(data));


    if (isUpdated === true) {
        res.send("THIS IS THE UPDATED DATA");
    } else {
        res.send("DATA IS NOT UPDATED")
    }



})

// DELETE => DELETE
productRouter.delete("/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json"));

    const updatedData = data.products.filter((el) => el.id != req.params.id);

    const save = fs.writeFileSync("./db.json", JSON.stringify(updatedData));

    res.send("THIS is deleted")
    

})

module.exports = {
    productRouter
}