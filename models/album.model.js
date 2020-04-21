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
        
    }
}
module.exports = conn