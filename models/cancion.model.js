const pool = require('../database');

const conn = {
    getCanciones: (req, resp) => {pool.query('SELECT * FROM cancion', (err, result)=>{
        if(err)
            console.log(err)
        else{
            resp.send(result.rows)
            console.log('Canciones ready..')}
    })
    }, 
    getCancion: (req, resp) => {
        const id = parseInt(req.params.id)

        pool.query('SELECT * FROM cancion WHERE id_cancion = $1' , [id], (err, result) => {
            if(err){
            console.log(err)}
            else{
            resp.send(result.rows)
            console.log('Cancion ready..')}
        })
    }, 
    
    getCancionesByAlbumId: (req, resp) => {
        const id = parseInt(req.params.id_album)

        pool.query('SELECT * FROM cancion WHERE id_album_fk = $1' , [id], (err, result) => {
            if(err){
            console.log(err)}
            else{
            resp.send(result.rows)
            console.log('Cancion ready..')}
        })
    }, 

    createCacion: (req, res) =>{
        const {titulo_cancion, duracion, id_album_fk} = req.body
        pool.query('INSERT INTO cancion (titulo_cancion, duracion, id_album_fk) VALUES ($1, $2, $3)',[titulo_cancion, duracion, id_album_fk],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send('Cancion creada')
            }
        })
    }

}

module.exports = conn;