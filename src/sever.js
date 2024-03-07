const express = require('express')


const app = express()

const  hostname= 'localhost'
const port = 1203

app.get('/', function (req, res) {
    res.send('<h1> Quoc viet</h1>')
  })

app.listen(port, hostname,() =>{
    console.log(`helo viet, bat sever http://${hostname}:${port}/`)
})