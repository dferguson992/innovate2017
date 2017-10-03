using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace savingmy_info.Controllers
{
    public class HealthCheckController : Controller
    {
        public OkResult Index()
        {
            return Ok();
        }
    }
}