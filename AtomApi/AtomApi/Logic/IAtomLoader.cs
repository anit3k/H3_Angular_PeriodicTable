using AtomApi.Models;

namespace AtomApi
{
    /// <summary>
    /// This is the interface that contains the methods for return a list of all atoms,
    /// and a method to get a single atom
    /// </summary>
    public interface IAtomLoader
    {
        List<AtomModel> GetAllAtoms();

        AtomModel GetAtomDetail(int id);
    }
}
