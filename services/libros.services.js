const sequelize = require('../db/conexion')

module.exports.listarLibros = async ()=> {
    try {
        let resultado = await sequelize.query('SELECT * FROM dbo.libros');
        console.log(resultado)
        return resultado;
    }catch (error) {
        console.log(error)
        throw new Error ("Ocurrio un error en la consulta");
    }
};

module.exports.nuevoLibro = async (libro)=> {
    let libroNuevo = [
        libro.titulo,
        libro.descripcion,
        new Date(libro.anio_de_publicacion),
        libro.autor_id
    ]
    console.log(libroNuevo)
    try {
        let resultado = await sequelize.query(`INSERT INTO libros (titulo, descripcion, anio_de_publicacion, autor_id) VALUES (?,?,?,?)`,
        {replacements: libroNuevo, type: sequelize.QueryTypes.SELECT});
        console.log(resultado)
        return 'alta de libros correctamente'
    }catch (error) {
        console.log(error)
        throw new Error ("Ocurrio un error al crear el nuevo libro");
    }
}


