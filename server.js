const PORT = process.env.PORT || 8080
const express = require("express")
const app = express()
const cors = require("cors")

const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://linkedInAdmin:linkedInAdmin@cluster0.ekiz0.mongodb.net/linkedIn?retryWrites=true&w=majority'
mongoose.connect(connectionString, { useNewUrlParser: true })
// run().catch(err => console.log("This is the error from get '/profiles' :", err))

// async function run(){
//     await mongoose.connect(connectionString, { useNewUrlParser: true })
//     const db = mongoose.connection
//     db.once('open', _ => {
//       console.log('Database connected')
//     })
//     db.on('error', err => {
//       console.error('connection error:', err)
//     })
//     const profiles = await Profile.find()
//     console.log(profiles, "profiles")
// }

//middleware uses
app.use(express.json())
app.use(cors())
app.use(express.static('../Front-End/public'))

//require profile schema
const Profile = require("./app/models/profile")

app.get("/", (req, res)=>{
    console.log("HOME")
    Profile.find()
    .then(data => console.log("These are the profiles", data))
    .catch(err => console.log("This is the error from get '/profiles' :", err))
    res.render("index")
})


//open sever
app.listen(PORT, ()=>
    console.log("Currently listening on PORT:", PORT)
)