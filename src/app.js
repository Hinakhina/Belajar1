const express = require('express')
const users = require('./index')
const app = express()

app.use(express.json())

app.get('/user', (req, res) => {
    res.json(users)
})

app.post('/user', (req, res) => {
    console.log("Result : ", req.body)
    res.send('Sukses')
})

app.listen(3000, function() {
    console.log("server telah menyala")
})

