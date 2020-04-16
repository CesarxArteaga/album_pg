const express = require('express');
const app = express();
const db = require('./database');

db.connect((err)=>{
    if(err)
    console.log(err)
    else 
    console.log('concetado a la base')
});

app.get('/', (req,res)=>{
    res.send("holaa")
    console.log("holaaaaaa")
});

app.get('/canciones', (req, res)=>{
    db.query('SELECT * FROM cancion', (err, result)=>{
        if(err)
        console.log(err)
        else
        res.send(result.rows)
    });
});

app.listen(3333, () => console.log("runing at 3333"))