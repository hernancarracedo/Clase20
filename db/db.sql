USE libros
GO

CREATE TABLE autor (
    id_autor int NOT NULL IDENTITY (1,1),
    nombres char (100) NOT NULL,
    apellidos char (100) NOT NULL,
    PRIMARY KEY (id_autor),
)
GO

CREATE TABLE libros (
    id int NOT NULL IDENTITY (1,1),
    titulo char (100) NOT NULL,
    descripcion char (200) NULL,
    anio_de_publicacion date NOT NULL,
    autor_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (autor_id) REFERENCES autor(id_autor)
)
GO

