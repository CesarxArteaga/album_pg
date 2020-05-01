const pool = require('../database');

const conn = {
    getCanciones: (req, resp) => {pool.query('SELECT * FROM cancion ORDER BY id_cancion ASC', (err, result)=>{
        if(err)
            console.log(err)
        else{
            resp.send(result.rows)
            console.log('Canciones ready..')}
    })
    }, 
    getCancionById: (req, resp) => {
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

        pool.query('SELECT * FROM cancion WHERE id_album_fk = $1 ORDER BY id_cancion ASC' , [id], (err, result) => {
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
    }, 

    deleteCancion: (req, res) => {
        const id = parseInt(req.params.id)
        pool.query('DELETE FROM cancion WHERE id_cancion = $1', [id], 
        (err, result)=>{
            if (err){
                console.log(err)
            } else {
                res.status(200).send('Cancion elimiminada')
            }
        })
    }, 

    updateCancion: (req, res) => {
        const id = parseInt(req.params.id)
        const {titulo_cancion, duracion, id_album_fk} = req.body
        pool.query('UPDATE cancion SET titulo_cancion = $1, duracion = $2, id_album_fk = $3 WHERE id_cancion = $4', [titulo_cancion, duracion, id_album_fk, id],
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.status(200).send('Cancion actualizada')
            }
        })
    }

}

module.exports = conn;