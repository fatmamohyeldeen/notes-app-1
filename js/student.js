const fs = require('fs')
const loadData = () => {
    try {

        const data = fs.readFileSync('student.json').toString()
        return JSON.parse(data)
    } catch (e) {
        return []
    }
}

const saveData = (data) => {
    const saved = JSON.stringify(data)
    fs.writeFileSync('student.json', saved)
}

/////////////////////////////////////////////////////////////////////

//  add (No duplicate id)

const addData = (name, id, degrees, coment) => {


    const studentData = loadData()

    const duplicateId = studentData.filter((obj) => {

        return obj.id === id
    })


    if (duplicateId.length == 0) {
        studentData.push({
            name,
            id,
            degrees,
            coment
        })

        saveData(studentData)
        console.log('Data is saved successfully')
    } else {
        console.log('Error Duplicate title')
    }
}

//total degrees
const addTotal = (degrees) => {
    let sum = 0
    for (let i = 0; i < degrees.length; i++) {
        sum = sum + degrees[i]
    }
    return sum
}


///////////////////////////////////////////////////////////////////////
// remove
const removeId = (id) => {
        const studentData = loadData()
        const saveId = studentData.filter((el) => {

            return el.id !== id
        })


        if (saveId.length !== data.length) {
            saveData(keepId)
            console.log('Id is deleted')
        } else {
            console.log('Sorry no id is found')
        }
    }
    ////////////////////////////////////////////////////////////////////
    //list

const listData = () => {
    const data = loadData()
    data.forEach((el) => {
        console.log(el.name + ' ', el.degrees)
    })
}

////////////////////////////////////////////////////////////////////




module.exports = {
    addData,
    addTotal,
    removeId,
    listData
}