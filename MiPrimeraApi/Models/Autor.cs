using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiPrimeraApi.Models
{
    public class Autor
    {
        public int AutorId { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }

        public class Mapeo
        {
            private EntityTypeBuilder<Autor> entityTypeBuilder;

            public Mapeo(EntityTypeBuilder<Noticia> mapeoAutor)
            {
                mapeoAutor.HasKey(x => x.AutorId);
            }

            public Mapeo(EntityTypeBuilder<Autor> entityTypeBuilder)
            {
                this.entityTypeBuilder = entityTypeBuilder;
            }
        }
    }
}
