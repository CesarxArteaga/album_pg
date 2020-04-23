const pool = require('../database')

const conn  = {
    getAlbumes: (req, res)=>{
        
        pool.query('SELECT * FROM album', (err, result) =>{
            if(err){
                console.log(err)
            }else{
               res.send(result.rows)
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
    }
}
module.exports = conn