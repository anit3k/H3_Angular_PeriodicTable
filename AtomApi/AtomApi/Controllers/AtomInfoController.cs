using Microsoft.AspNetCore.Mvc;

namespace AtomApi.Controllers
{
    public class AtomInfoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
