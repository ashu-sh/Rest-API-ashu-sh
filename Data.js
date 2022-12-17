const mongoose = require('mongoose'); //creating new collection in Database
const PostSchema = mongoose.Schema({

    title:{

        type:String,
        require:true
    },
    description:{

        type:String,
        require:true
    },
    date:{

        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Data',PostSchema)