
const autorServices = require('../services/autor.services')

module.exports = (app) => {

    app.get('/autor', async (req, res) => {
        try {
            let resultado = await autorServices.listarAutor()
            res.json(resultado)
        }catch (err){
            console.log(err.message)
            res.status(500).json({error : err.message}) 
        }
    })

    app.post('/autor', async (req,res) => {
        let autor = req.body
        try {
            let resultado = await autorServices.nuevoAutor(autor)
            console.log(resultado)
            res.json(resultado)
        }catch (err){
            console.log(err.message)
            res.status(500).json({error : err.message})
        }
    })

}
