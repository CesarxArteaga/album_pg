const pool = require('../database')

const conn  = {
    getAlbumes: (req, res)=>{
        pool.query('SELECT * FROM album ORDER BY id_album ASC', (err, result) =>{
            if(err){
                console.log(err)
            }else{
               res.send(result.rows)
            }
        })
        
    },

    getAlbumById:(req,res) =>{
        let id = req.params.id;
        pool.query('SELECT * FROM album WHERE id_album = $1', [id], 
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.send(result.rows)
                console.log('Album recuperado')
            }
        })
    },

    createAlbum: (req, res)=>{
        const {titulo_album} = req.body
        pool.query('INSERT INTO album (titulo_album) VALUES ($1)',[titulo_album], 
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.send('new album ' + titulo_album + ' added')
            }
        })
    },

    deleteAlbum: (req, res)=>{
        const id = parseInt(req.params.id)
        pool.query('DELETE FROM album WHERE id_album = $1', [id], 
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.send('Album eliminado correctamente')
            }
        })
    },

    updateAlbum: (req, res) => {
        const id = parseInt(req.params.id)
        const titulo_album = req.body.titulo_album
        pool.query('UPDATE album SET titulo_album = $1 WHERE id_album = $2', [titulo_album, id],
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.status(200).send('Album modificado')
            }
        })
    }

}
module.exports = conn