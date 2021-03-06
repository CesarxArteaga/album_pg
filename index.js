const express = require('express');
const app = express();
const db = require('./database');
const cors = require('cors');
const bodyParser = require('body-parser')
const cancion_model = require('./models/cancion.model')
const album_model = require('./models/album.model')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

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
app.get('/cancion/:id', cancion_model.getCancionById)
app.get('/album/:id_album/canciones', cancion_model.getCancionesByAlbumId)
app.post('/cancion', cancion_model.createCacion)
app.put('/cancion/:id', cancion_model.updateCancion)
app.delete('/cancion/:id', cancion_model.deleteCancion)

app.get('/albumes', album_model.getAlbumes)
app.get('/album/:id',album_model.getAlbumById)
app.post('/album', album_model.createAlbum)
app.put('/album/:id', album_model.updateAlbum)
app.delete('/album/:id', album_model.deleteAlbum)



app.listen(process.env.PORT || 3333, () => console.log("runing..."))