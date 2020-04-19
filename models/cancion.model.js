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
    }
}

module.exports = conn;