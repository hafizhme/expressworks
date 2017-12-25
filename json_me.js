const fs = require('fs')
const express = require('express')
const app = express()

app.get('/books', (req, res) => {
    fs.readFile(process.argv[3], (err, data) => {
        if (err) throw err
        res.send(JSON.parse(data))

    })
})

app.listen(process.argv[2])