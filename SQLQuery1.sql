CREATE DATABASE MiPrimeraApi

USE MiPrimeraApi

CREATE TABLE Noticia(
NoticiaId int primary key identity,
Titulo varchar(120),
Descripcion varchar(200),
Contenido varchar(max),
Fecha Datetime,
AutorId int,
);

CREATE TABLE Autor(
AutorId int primary key identity,
Nombre varchar(100),
Apellido varchar(100)
)

select * from Noticia;
select * from autor;

insert into autor (Nombre, Apellido) values ('Ana', 'Martinez');
insert into Noticia (Titulo, Descripcion, Contenido, Fecha, AutorId) values ('Noticia2', 'Descripcion noticia 2', 'Contenido noticia 2', GETDATE(), 1);
