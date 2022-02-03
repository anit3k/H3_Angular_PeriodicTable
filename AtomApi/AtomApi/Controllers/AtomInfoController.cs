using AtomApi.Logic;
using AtomApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace AtomApi.Controllers
{
    /// <summary>
    /// This is the controller of the atoms api.
    /// The idea to implement the factory pattern, was to make the controller less dependent on the atom loader class.
    /// Also great fun to try
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class AtomInfoController : Controller
    {
        [Route("")]
        [HttpGet]
        public ActionResult<IEnumerable<AtomModel>> GetAll()
        {
            Console.WriteLine("Request for all atoms!");
            return getAllAtoms(new AtomLoadCreater());
            
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<object> GetAtom(int id)
        {
            Console.WriteLine($"Request for atom number {id}");
            return getDetail(new AtomLoadCreater(), id);
        }


        private List<AtomModel> getAllAtoms(Creator creator)
        {
            return creator.GetAllAtoms();
        }

        private object getDetail(Creator creator,int id)
        {
            return creator.GetSingleAtom(id);
            
        }

    }
}
