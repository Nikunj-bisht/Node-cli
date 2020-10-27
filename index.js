#!/usr/bin/env node

const mongoose = require("mongoose");
const func = require("./funforcli");
const {prompt} = require('inquirer');

const program = require("commander");

const db = mongoose.connect('mongodb://localhost:27017/commands',{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
});

const questions = [{
type:'input',
name:'firstname',
message:'enter firstname'

},
{
    type:'input',
    name:'lastname',
    message:'enter lastname'
    
    },
    {
        type:'input',
        name:'hobbie',
        message:'enter hobbie'
        
        },
        {
            type:'input',
            name:'gender',
            message:'enter gender'
            
            }

];

// program.command('add <firstname> <lastname> <hobbie> <gender>')
// .alias('a')
// .description('Add a customer')
// .action((firstname,lastname,hobbie,gender)=>{

// func.addcustomertodb({firstname,lastname,hobbie,gender});

// })

program.command('add')
.alias('a')
.description('Add a customer')
.action(function(){

prompt(questions).then(answers=> func.addcustomertodb(answers));

});

program.command('display')
.alias('d')
.description('All customers')
.action(function(){

func.list();
   //dis db.close();

});


program
.command('find <name>')
.alias('f')
.description('Find a customer')
.action(function(name){

func.findcustomertodb(name);

})

program
.version('1.0.0')
.description('Welcome commander');

program.parse(process.argv);