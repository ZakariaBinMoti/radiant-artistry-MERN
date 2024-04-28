const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


app.get('/', (req ,res) =>{
    res.send('Hello World from Home');
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})