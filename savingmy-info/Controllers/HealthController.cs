using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace savingmy_info.Controllers
{
    [Route("api/[controller]")]
    public class HealthController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {
            return Ok();

        }

   
    }
}