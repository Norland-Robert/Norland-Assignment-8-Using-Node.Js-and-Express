const express = require("express")
const router = express.Router()

//Creates a memory array to store data
let resources = []

//A GET request to get data from the memory array
router.get('/', (req, res) => {
    res.status(200).json({data: resources})
})


router.get('/resources', (req,res) => {

})

//Exports router file for use in the server file
module.exports = router