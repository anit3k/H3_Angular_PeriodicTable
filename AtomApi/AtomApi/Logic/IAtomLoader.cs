using AtomApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtomApi
{
    public interface IAtomLoader
    {
        List<AtomModel> GetAllAtoms();

        AtomModel GetAtomDetail(int id);
    }
}
