using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace savingmy_info.Controllers
{
    public class UpdateTagController : Controller
    {
        [HttpPost("{msgId}")]
        public JsonResult UpdateTags(string[] filter)
        {
            return Json("");
        }
    }
}