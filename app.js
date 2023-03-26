const express = require('express');
const PORT = 4000;

//create a server
const app = express()

//Adding route to our server
/*app.get('/', (req, res) => {
    res.send('welcome to our app')
})*/

app.get('/', (req, res) => {
    res.status(200).send('welcome to our app')
})

//start the above serve
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})

app.get('/json', (req, res) => {
    const dummyData = {
        name: 'Dell',
        size: 15,
        ram: 8,
        prize: 80000

    }
    res.json(dummyData)
})

app.get('/download', (req, res) => {
    res.download('./package.json')
})
alert("hello");

console.log("commit change")
