const express = require('express');
const app = express();
const db = require('./database');
const cors = require('cors');
const cancion_model = require('./models/cancion.model')
const album_model = require('./models/album.model')

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
app.get('/album/:id_album/canciones', cancion_model.getCancionesByAlbumId)

app.get('/albumes', album_model.getAlbumes)

app.listen(process.env.PORT || 3333, () => console.log("runing..."))