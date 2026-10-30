//File for all server code

//Creation of express server
const express = require("express")
const app = express()

//Requests
app.get('/', (req, res) => {
    console.log('Here')

    res.send("Hi")
})


app.listen(3000)

