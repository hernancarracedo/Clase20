const sequelize = require('../db/conexion')

module.exports.nuevoAutor = async (autor) => {
    let nuevoAutor = [
        autor.nombres,
        autor.apellidos
    ]
    try {
        let resultado = await sequelize.query(`INSERT INTO autor (nombres , apellidos) VALUES (?,?)`,
        {replacements: nuevoAutor, type: sequelize.QueryTypes.SELECT});
        console.log(resultado)
        return 'Alta de autor correctamente'
    }catch (error) {
        console.log(error)
        throw new Error ("Ocurrio un error en la consulta");
    }
}

module.exports.listarAutor = async () => {
    try {
        let resultado = await sequelize.query('SELECT * FROM autor')
        return resultado
    }catch (error){
        console.log(error)
        throw new Error ("Ocurrio un error en la consulta");
    }
}
