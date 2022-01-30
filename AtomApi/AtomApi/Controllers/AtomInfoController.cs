using AtomApi.Logic;
using AtomApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace AtomApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtomInfoController : Controller
    {
        private AtomManager manager = new AtomManager();

        [Route("")]
        [HttpGet]
        public ActionResult<List<AtomModel>> GetAll()
        {
            return manager.AllAtoms;
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<object> GetAtom(int id)
        {
            return manager.GetAtom(id);
        }

    }
}
