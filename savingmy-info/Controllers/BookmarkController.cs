using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace savingmy_info.Controllers
{
    [Route("api/[controller]")]
    public class BookmarkController : Controller
    {
        [HttpGet("{user}")]
        public JsonResult Get(string[] filter)
        {
            return Json(filter);
        }

        [HttpDelete("{msgId}")]
        public JsonResult Delete()
        {
            return Json("");
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]string value)
        {
            return Json("");

        }

     
    }
}