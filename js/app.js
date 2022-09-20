const studentData = require('./student')
console.log(studentData)

// Add command
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add name , id ,degrees',

    builder: {
        name: {
            describe: 'This is adding student name command',
            type: 'string',
            demandOption: true
        },
        id: {
            describe: 'This is adding student id command',
            type: 'number',
            demandOption: true
        },
        degrees: {

            describe: 'This is adding array of student degrees ',
            type: '[]',
            demandOption: true
        },
        coment: {
            describe: 'This is adding comment ',
            type: 'string',
            demandOption: false
        },

    },

    handler: () => {
        console.log(yargs.argv.id + ' ' + yargs.argv.name + ' ' + yargs.argv.degrees + ' ' + yargs.argv.coment)
        console.log(studentData.addTotal(yargs.argv.degrees))
    }
})

// // remove
yargs.command({
        command: 'delete',
        describe: 'Delete id',
        builder: {
            id: {
                describe: 'This is delete command',
                type: 'number',
                demandOption: true
            }
        },
        handler: () => {
            studentData.removeId(yargs.argv.id);
        }
    })
    //list
yargs.command({
    command: 'list',
    describe: 'List data',

    handler: () => {
        studentData.listData()

    }
})

yargs.parse()