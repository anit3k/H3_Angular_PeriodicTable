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
        /// <summary>
        /// Gets all the known atoms and returns a .json array.
        /// </summary>
        /// <returns>.json array of all atoms</returns>
        [Route("")]
        [HttpGet]
        public ActionResult<IEnumerable<AtomModel>> GetAll()
        {
            return getAllAtoms(new AtomLoadCreater());
            
        }

        /// <summary>
        /// Take in the atom number and returns the details about that specific atom an a .json format
        /// </summary>
        /// <param name="id">Atom number</param>
        /// <returns>Atom details</returns>
        [Route("{id}")]
        [HttpGet]
        public ActionResult<object> GetAtom(int id)
        {
            return getDetail(new AtomLoadCreater(), id);
        }

        private List<AtomModel> getAllAtoms(Creator creator)
        {
            return creator.GetAllAtoms();
        }

        private object getDetail(Creator creator, int id)
        {
            return creator.GetSingleAtom(id);
            
        }
    }
}
