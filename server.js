//File for all server code

//Creation of express server
const express = require("express")
const app = express()

//Sets application to utilize view engine
app.set('view engine', 'ejs')

//Requests
app.get('/', (req, res) => {
    console.log('Here')

    //Renders index file to be displayed on web/server page
    res.render("index", {text: "World"})
})


const userRouter = require("./routes/users")

//const apiRouter = require('./routes.api')

//calls the router for use
app.use("./users", userRouter)

app.listen(3000)

