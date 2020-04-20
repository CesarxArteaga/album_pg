const pool = require('../database')

const conn  = {
    getAlbumes: (req, res)=>{
        pool.query('SELECT * FROM album', (err, result) =>{
            if(err){
                console.log(err)
            }else{
                res.send(result.rows)
                console.log('Album get succes...')
            }
        })
    }
}
module.exports = conn