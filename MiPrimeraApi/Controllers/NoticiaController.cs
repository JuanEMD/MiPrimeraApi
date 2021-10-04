using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiPrimeraApi.Models;
using MiPrimeraApi.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace MiPrimeraApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class NoticiaController : ControllerBase
    {

        private readonly NoticiaService _NoticiaService;
        public NoticiaController(NoticiaService noticiaService)
        {
            _NoticiaService = noticiaService;
        }

        [HttpGet]
        [Route("ObtenerNoticia")] //Api/Noticia/ObtenerNoticia
        public IActionResult ObtenerNoticia()
        {
            var resultado = _NoticiaService.ObtenerNoticias();
            return Ok(resultado);
        }

        [HttpPost]
        [Route("AgregarNoticia")] //Api/Noticia/ObtenerNoticia
        public IActionResult AgregarNoticia([FromBody] Noticia _noticia)
        {
            var resultado = _NoticiaService.AgregarNoticia(_noticia);
            if(resultado)
            {
                return Ok(resultado);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut]
        [Route("EditarNoticia")] //Api/Noticia/EditarNoticia
        public IActionResult EditarNoticia([FromBody] Noticia _noticia)
        {
            var resultado = _NoticiaService.EditarNoticia(_noticia);
            if (resultado)
            {
                return Ok(resultado);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("EliminarNoticia/{_noticiaId}")]
        public IActionResult EliminarNoticia(int _noticiaId)
        {
            var resultado = _NoticiaService.EliminarNoticia(_noticiaId);
            if (resultado)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

    }
}
