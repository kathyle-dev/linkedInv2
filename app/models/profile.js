const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  role: String,
  company: String,
  linkedIn: String,//{type: String, unique: true}, //there can only be ONE unique linkedIn link per profile
  picture: String
})

module.exports = mongoose.model("Profile", profileSchema)