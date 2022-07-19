const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    console.log('user hit the root route');
    res.status(200).send(' This is home page');
})


app.get('/about', (req,res)=>{
    console.log('user hit the about route');
    res.status(200).send(' This is about page');
});

app.all('*', (req,res)=>{
    res.status(404).send('Page not found');
});


app.listen(3000 ,()=>{
    console.log('server is runnnig on port 3000');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen