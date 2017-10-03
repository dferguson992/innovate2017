using Microsoft.AspNetCore.Mvc;

namespace Frontend.Controllers
{
    public class ControllerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}