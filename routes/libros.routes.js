
const librosServices = require('../services/libros.services')

module.exports = (app) => {

    app.get('/libros', async (req,res) => {
        try {
            let resultado = await librosServices.listarLibros();
            res.json(resultado)
        }catch (err){
            console.log(err.message)
            res.status(500).json({error : err.message})
        }
    })

    app.post('/nuevolibro', async (req,res) => {
        let libro = req.body
        console.log(libro)
        try {
            let resultado = await librosServices.nuevoLibro(libro)
            console.log(resultado)
            res.json(resultado)
        }catch (err){
            console.log(err.message)
            res.status(500).json({error : err.message})
        }
    })

}