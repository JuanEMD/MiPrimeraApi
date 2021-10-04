using Microsoft.EntityFrameworkCore;
using MiPrimeraApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiPrimeraApi
{
    public class NoticiasDBContext : DbContext
    {
        public NoticiasDBContext(DbContextOptions opciones) : base(opciones)
        {

        }

        public DbSet<Noticia> Noticia { get; set; }
        public DbSet<Autor> Autor { get; set; }



        protected override void OnModelCreating(ModelBuilder ModeloCreador)
        {
            new Noticia.Mapeo(ModeloCreador.Entity<Noticia>());
            new Autor.Mapeo(ModeloCreador.Entity<Autor>());
        }
    }
}
