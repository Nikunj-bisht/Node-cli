const mongoose = require("mongoose");

const customerschema = mongoose.Schema({

firstname:{
type:String
},
lastname:{
    type:String

},
hobbie:{
    type:String

},gender:{
    type:String

}

});


module.exports=mongoose.model('Custosc',customerschema);

