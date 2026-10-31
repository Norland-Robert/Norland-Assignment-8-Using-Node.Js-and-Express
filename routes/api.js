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

    //Sets the targetID to be retrieved
    const targetID = req.params.id

    //Searches the array to see if a value exists in that location
    const match = resources.find(item => item.id === targetID)

    //Conditional Check in the event match is false for finding the requested id
    if (!match) {
        return res.status(404).json({
            error: "Requested Resource Not Found"
        })
    }

    //Returns an OK response otherwise
    res.status(200).json({data: match})
    
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