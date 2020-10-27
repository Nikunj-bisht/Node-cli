
const customer = require('./schemaforcli');


exports.addcustomertodb = async(custo) =>{

const cr = await customer.create(custo);
console.info(`added`,cr);

}


exports.findcustomertodb = async(name) =>{

const finder =   await  customer.find({firstname:name});
    
    
    }


exports.list = async() =>{

const finder =   await  customer.find();
console.info(`:)`,finder);

    
    }
