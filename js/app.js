/**
 * Modules:- allow to add functiolnality in your app
 * 3) Types
 * 1- Core module File System 
 */

// Terminal --> New Terminal
// node name of file.js --> node app.js
// const fs = require('fs')
// // write in file 
// fs.writeFileSync('notes.txt','Hello')

// // read File Sync
// // buffer
// console.log(fs.readFileSync('notes.txt').toString())

// // appendFileSync

// fs.appendFileSync('notes.txt',' farah')
// console.log(fs.readFileSync('notes.txt').toString())

// /////////////////////////////////////////////////////////////////////////////

// // 2) Our own modules 
// /**
//  * require --> main file
//  * module.exports --> other file (data)
//  */

// const obj = require('./data')
// console.log(obj)
// console.log(obj.lastName)
// console.log(obj.fName)
// console.log(obj.sum(5,5))
// obj.pFunc()

// /////////////////////////////////////////////////////////////////////////

// // NPM 
// /**
//  * Npm --> node package manger
//  * npm init 
//  * 
//  * npm i validator
//  * 
//  * npm i --> in case node_modules was deleted (retrive node_modules)
//  */

//  var vEmail = require('validator');

//  console.log(vEmail.isEmail('foo@bar.com')); // true

 //////////////////////////////////////////////////////////////////////////////

 // allow me to deal input terminal
//  console.log(process.argv)

 // toLowerCase --> Concert uppercase A to lowercase a
 // toUpperCase --> Convert lowercase a to Uppercase A
//  if(process.argv[2].toLowerCase()==='add'){
//     console.log('Add item')
//  }
//  else if(process.argv[2]==='delete'){
//     console.log('Delete item')
//  }
//  else {
//     console.log('Error')
//  }
 ///////////////////////////////////////////////////////////////
 // --key="value" --key=20 --key=true
 // parse arguments 
 // yargs --> allow me to take input terminal and parse parameters
 // npm i yargs

 const yargs = require('yargs')
// Version1
// Add command
// yargs.command({
//     command:'add',
//     describe:'Add note', // comment
//     // logic that will be excuted when i call this command
//     handler:()=>{
//         console.log('Add note')
//     }
// })

// // delete
// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     handler:()=>{
//         console.log('Delete notess')
//     }
// })

// // read
// yargs.command({
//     command:'read',
//     describe:'Read note',
//     handler:()=>{
//         console.log('Read notee')
//     }
// })
// // list

// yargs.command({
//     command:'list',
//     describe:'List note',
//     handler:()=>{
//         console.log('List note')
//     }

// })
////////////////////////////////////////////////////////////////////////

// Version 2

// Add command
// yargs.command({
//     command:'add',
//     describe:'Add note', // comment
//     // options that command deal with 
//     builder:{
//         title:{
//             describe:'This is title description in add command',
//             type:'string',
//             demandOption:true // Obligatory
//         },
//         body:{
//             describe:'This is body description in add command',
//             type:'string',
//            demandOption:true
//         }
//     },

//     // logic that will be excuted when i call this command
//     handler:()=>{
//         console.log(yargs.argv.title + ' ' + yargs.argv.body)
//     }
// })

// // delete
// // builder --> title
// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     builder:{
//         title:{
//             describe:'This is title description in delete command',
//             type:'string',
//             demandOption:true
//         }
//     },
//     handler:()=>{
//         console.log(yargs.argv.title)
//     }
// })

// // read
// yargs.command({
//     command:'read',
//     describe:'Read note',
//     builder:{
//         title:{
//             describe:'This is title description in read command',
//             type:'string',
//             demandOption:true
//         }
//     },
//     handler:()=>{
//         console.log('Read notee' + yargs.argv.title)
//     }
// })
// // list

// yargs.command({
//     command:'list',
//     describe:'List note',
//     handler:()=>{
//         console.log('List note')
//     }

// })

////////////////////////////////////////////////////////////////////

// Version 3
const notes = require('./notes')
console.log(notes)
yargs.command({
    command:'add',
    describe:'Add note', // comment
    // options that command deal with 
    builder:{
        title:{
            describe:'This is title description in add command',
            type:'string',
            demandOption:true // Obligatory
        },
        body:{
            describe:'This is body description in add command',
            type:'string',
           demandOption:true
        }
    },

    // logic that will be excuted when i call this command
    handler:()=>{
       // console.log(yargs.argv.title)
        notes.addNote(yargs.argv.title,yargs.argv.body)
    }
})

// delete
// builder --> title
yargs.command({
    command:'delete',
    describe:'Delete note',
    builder:{
        title:{
            describe:'This is title description in delete command',
            type:'string',
            demandOption:true
        }
    },
    handler:()=>{
       // console.log(yargs.argv.title)
       notes.removeNotes(yargs.argv.title)
    }
})

// read
yargs.command({
    command:'read',
    describe:'Read note',
    builder:{
        title:{
            describe:'This is title description in read command',
            type:'string',
            demandOption:true
        }
    },
    handler:()=>{
      notes.readNote(yargs.argv.title)
    }
})
// list

yargs.command({
    command:'list',
    describe:'List note',
    handler:()=>{
        notes.listNote()
    }

})


// console.log(yargs.argv)
yargs.parse()

//////////////////////////////////////////////////////////////////////

// Check trials.js
/**
 * Notes:-
 * git init
 * root of your project --> .gitignore
 * open github desktop --> add existing repo
 */

