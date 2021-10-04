using Microsoft.EntityFrameworkCore.Metadata.Builders; 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiPrimeraApi.Models
{
    public class Noticia
    {
        public int NoticiaId { get; set; }
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public string Contenido { get; set; }
        public DateTime Fecha { get; set; }
        public int AutorId { get; set; }
        public Autor Autor { get; set; }


        public class Mapeo
        {
            public Mapeo(EntityTypeBuilder<Noticia> mapeoNoticia)
            {
                mapeoNoticia.HasKey(x => x.NoticiaId);
                //mapeoNoticia.Property(x => x.Titulo).HasColumnName("Titulo");
                mapeoNoticia.HasOne(x => x.Autor);
            }
        }
    }
}
