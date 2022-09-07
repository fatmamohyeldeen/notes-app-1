const fs = require('fs')
// function header
const loadNotes = () =>{
    try{
        // array of json
        // [{"title":"note1","b":"newbody"}]
        // [{"title":"note1","body":"body1"}]
        const data = fs.readFileSync('notes.json').toString()
        // array of json --> array of object
// [{"title":"note1","b":"newbody"}] --> [{title:"note1",b:"newbody"}]
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}

const saveNotes = (data) =>{
    //console.log(data)
    // array of object --> array of json
    // // [{title:"note1",b:"newbody"},{title:'note2',b:'new'}] -->
    // // [{"title":"note1","b":"newbody"},{"title":'note2',"b":'new'}]
   const savedata = JSON.stringify(data)
   fs.writeFileSync('notes.json',savedata)
}

// title --> yargs.argv.title
// body --> yargs.argv.body
// Version 1
// const addNote = (title,body) =>{
//     // function body
//     const notes = loadNotes() // [] // [{title:"note1",b:"newbody"}]
//     console.log(notes)
//     // [{tilte:'notee1',body:'body1'}]

//     // [{title:"note1",b:"newbody"},{title:'note2',b:'new'}]
//     notes.push({
//         title,  // title:title
//         body //body:body
//     })
//     console.log(notes) // [{title:'note1',b:'newbody'}]
//     saveNotes(notes)  // // [{title:"note1",b:"newbody"},{title:'note2',b:'new'}]
// }
/////////////////////////////////////////////////////////////////////

// Version2 add (No duplicate title)
// filter --> new array of elements statisfy condition
// find --> first elemnt statify certain condtion 
// find
// const addNote = (title,body) =>{
//     // array of object
//     /**
//      * [
//      * {title:'note1',body:'body1'},
//      * {title:'note2',body:'body2'},
//      * {title:'note3',body:'body3'},
//      * ]
//      */
//     // [{title:"note1",body:"body1"}]
//     /**
//      * [{title:"note1",body:"body1"},{title:"note2",body:"body2"}]
//      */
//     const notes = loadNotes()
//     console.log(notes)
//     // [ {title:"note1",body:"body1"} ] 1st time
//     /**
//      * 2nd time
//      * [{title:"note1",body:"body1"},
//      * {title:"note2",body:"body2"}]
//      */
//     const duplicateTitles = notes.filter((obj)=>{
//         // note1 (saved inside file old) === note2 F
//         // note1 === note5 F
//         // note2 === note5 F
//         // note3 === note5 F
//         // note4 === note5 F
//         return obj.title === title
//     })
//     // [{title:"note2",body:"body2"}]

//     // [{title:"note3",body:"body3"}]
//     console.log(duplicateTitles) // empty array []

//     if(duplicateTitles.length == 0){
//         notes.push({
//             title,
//             body
//         })
//         saveNotes(notes)
//         console.log('Note is saved successfully')
//     }
//     else{
//         console.log('Error Duplicate title')
//     }
// }
///////////////////////////////////////////////////////////////////////

const addNote = (title,body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((el)=>{
        /**
         * note1 === note3 F
         * note2 === note3 F
         * note3 === note3 T // {title:'note3',body:'body2'}
       
        * note1 === note4 F
         * note2 === note4 F
         * note3 === note4 F
         * note4 === note4 T {title:'note4',body:'body4'}
         * 
         *note1 === note5 F
         * note2 === note5 F
         * note3 === note5 F
         * note4 === note5 F 
         */
        return el.title === title
    })
    console.log(duplicateNote)
    /**
     * // name of variable --> value
     * // name of variabble --> doesnot have value
     * if(nameofvaribale){
     * }
     */
    if(!duplicateNote){
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log('Saved')
    }
    else{
        console.log('Error duplicate title')
    }
}
///////////////////////////////////////////////////////////////////////
// removeNotes
// const removeNotes = (title) =>{
//     const notes = loadNotes()
//     const notesToKeep = notes.filter((el)=>{
//     /*
//          * note1 !== note4 T //{title:'note1',body:'body1'}
//          * note4 !== note4 F
//          */
//         return el.title !== title
//     })
//    console.log(notes) // 3 elemnt   // 2
//     console.log(notesToKeep) // 2 elemnts   // 2
//    // saveNotes(notesToKeep)

//    if(notesToKeep.length !== notes.length){
//     saveNotes(notesToKeep)
//     console.log('Note is deleted')
//    }
//    else {
//     console.log('Sorry no note is found')
//    }
// }
////////////////////////////////////////////////////////////////////
// find
const removeNotes = (title) => {
const notes = loadNotes()
const note = notes.find((el)=>{
    /**
    * note1 === note3 F
     * note5 === note3 F
     * note3 === note3 T
     */
    /**
     * note1 === note6 F
     * note5 === note6 F
     * note3 === note6 F
     */
    return el.title === title
})
console.log(note) // undefined // {title:'note3',body:'body2'}
if(note){
   // console.log(note)
    const index = notes.indexOf(note)
    console.log(index) // 2
    notes.splice(index,1)
    saveNotes(notes)
}
else{
    console.log('Not found')
}}
////////////////////////////////////////////////////////////////////

// read
const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((el)=>{
        /**
         * note1 === note3 F
         * note5 === note3 F
         */

        /**
         * note1 === note1 T
         * note5 === note1  // this comaprison will not be done
         */
        return el.title === title
    })
    console.log(note) //undefined // {title:'note1',body:;'body1'}
    if(note){
        console.log(note.body)
    }
    else{
        console.log('No note is found')
    }
} 
// list
const listNote = () =>{
    const notes = loadNotes()
    notes.forEach((el)=>{
        console.log(el.body)
    })
}
module.exports = {
    addNote,  //addNote:addNote
    removeNotes,
    readNote,
    listNote
}

