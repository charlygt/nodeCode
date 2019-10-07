const mongoose =  require('mongoose');

const SpotSheme = mongoose.Schema({
    thumbnail : String,
    company:String,
    price:Number,
    techs:[String],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Spot',SpotSheme);