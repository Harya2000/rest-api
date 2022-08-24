let mongoose=require('mongoose')

const server="localhost:27017"
const database="mongodb://localhost:27017/?authMechanism=DEFAULT"

mongoose.connect(database)

let CustomerSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.model('customer',CustomerSchema)