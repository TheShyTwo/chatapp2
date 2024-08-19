const express = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')

const port = 3000
const host = '127.0.0.1'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('user connected !')
    socket.on('on-chat', data => {
        io.emit('user-chat', data)
    })
})

server.listen(port, () => {
    console.log(`listening at http://${host}:${port}`)
})