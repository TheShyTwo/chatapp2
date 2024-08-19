const express = require('express')
const http = require('http')

const port = 3000
const host = '127.0.0.1'

const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
    res.send('hello world vip')
})

server.listen(port, () => {
    console.log(`listening at http://${host}:${port}`)
})