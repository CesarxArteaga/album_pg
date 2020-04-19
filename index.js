const express = require('express');
const app = express();
const db = require('./database');
const cors = require('cors');
const cancion_model = require('./models/cancion.model')

app.use(cors())

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


app.get('/canciones', cancion_model.getCanciones)
app.get('/cancion/:id', cancion_model.getCancion)

app.listen(process.env.PORT || 3333, () => console.log("runing..."))