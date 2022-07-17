const http = require('http')

//const server=http.createServer((req,res) => {
//res.end('welcom')
// })

//using event emitter API
const server = http.createServer()
//emits request event
//subcribe to it / listen for it / respond to it

server.on('request',(req,res) => {
    res.end('welcome')
})

server.listen(5000)