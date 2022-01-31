using AtomApi.Logic;
using AtomApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace AtomApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtomInfoController : Controller
    {
        private IAtomLoader manager = new AtomLoader();

        [Route("")]
        [HttpGet]
        public ActionResult<IEnumerable<AtomModel>> GetAll()
        {
            return manager.GetAllAtoms();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<AtomModel> GetAtom(int id)
        {
            return manager.GetAtomDetail(id);
        }

    }
}
