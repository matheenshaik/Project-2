const mongoose = require("mongoose")

const ObjectId = mongoose.Schema.Types.ObjectId


const internSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        reuired: true,
        unique: true,
        trim: true

    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    collegeId : {
        type: ObjectId,
        required: true,
        ref: "college"
    },
    isDeleated: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})


module.exports = mongoose.model("intern", internSchema)