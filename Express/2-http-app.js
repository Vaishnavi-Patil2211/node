const http = require('http')
const fs = require('fs')

const hostname = 'localhost';
const port = 3000;


const homePage = fs.readFileSync('./templates/index.html')
const homeStyles = fs.readFileSync('./templates/styles.css')
// const homeImage = fs.readFileSync('./templates/logo.svg')
const homeLogic = fs.readFileSync('./templates/app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
//   // image/logo
//   else if (url === '/logo.svg') {
//     res.writeHead(200, { 'content-type': 'image/svg+xml' })
//     res.write(homeImage)
//     res.end()
//   }
  // logic
  else if (url === '/app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});