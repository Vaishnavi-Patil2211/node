const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './templates/index.html'));

});

app.all('*', (req,res)=>{
    res.status(404).send('Page not found');

});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});