const express = require("express")
const router = express.Router()

//Creates a memory array to store data
let resources = []

//A GET request to get data from the memory array
router.get('/', (req, res) => {
    res.status(200).json({data: resources})
})

// GET Request to retrieve one resource from the array by id
router.get('/:id', (req, res) => {

})

// POST Request to create a new resource to be added to the array
router.post('/', (req, res) => {

})

// PUT Request to update an existing resourse using its id
router.put('/:id', (req, res) => {

})

// DELETE Request to delete a resourse using its id
router.delete('/:id', (req, res) => {
    
})





//Exports router file for use in the server file
module.exports = router