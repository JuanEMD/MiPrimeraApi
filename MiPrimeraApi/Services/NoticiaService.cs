using Microsoft.EntityFrameworkCore;
using MiPrimeraApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiPrimeraApi.Services
{
    public class NoticiaService
    {
        private readonly NoticiasDBContext _NoticiaDbContext;
        public NoticiaService(NoticiasDBContext noticiaDbContext)
        {
            _NoticiaDbContext = noticiaDbContext;
        }

        public List<Noticia> ObtenerNoticias()
        {
            var resultado = _NoticiaDbContext.Noticia.Include(x => x.Autor).ToList();
            return resultado;
        }

        public Boolean AgregarNoticia(Noticia _noticia)
        {
            try
            {
                _NoticiaDbContext.Noticia.Add(_noticia);
                _NoticiaDbContext.SaveChanges();
                return true;
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return false;
            }

        }

        public Boolean EditarNoticia(Noticia _noticia)
        {
            try
            {
                var noticiaBaseDatos = _NoticiaDbContext.Noticia.Where(busqueda => busqueda.NoticiaId == _noticia.NoticiaId).FirstOrDefault();
                noticiaBaseDatos.Titulo = _noticia.Titulo;
                noticiaBaseDatos.Descripcion = _noticia.Descripcion;
                noticiaBaseDatos.Contenido = _noticia.Contenido;
                noticiaBaseDatos.Descripcion = _noticia.Descripcion;
                noticiaBaseDatos.Fecha = _noticia.Fecha;
                noticiaBaseDatos.AutorId = _noticia.AutorId;

                _NoticiaDbContext.SaveChanges();

                return true;
            }
            catch
            {
                return false;
            }
        }

        public Boolean EliminarNoticia(int _noticiaId)
        {
            try
            {
                var noticiaBaseDatos = _NoticiaDbContext.Noticia.Where(busqueda => busqueda.NoticiaId == _noticiaId).FirstOrDefault();
                _NoticiaDbContext.Noticia.Remove(noticiaBaseDatos);
                _NoticiaDbContext.SaveChanges();

                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
