const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './templates/index.html'))
})

app.get('/about', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './templates/about.html'))
})

app.all('*', (req,res)=>{
    res.status(404).send('Page not found');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});