using AtomApi.Models;

namespace AtomApi.Logic
{
    /// <summary>
    /// Getting to know the Factory design pattern, not necessary but good practice
    /// </summary>
    abstract class Creator
    {
        public abstract IAtomLoader FactoryMethod();

        public AtomModel GetSingleAtom(int id)
        {
            var atom = FactoryMethod();
            return atom.GetAtomDetail(id);
        }

        public List<AtomModel> GetAllAtoms()
        {
            var listOfAtoms = FactoryMethod();
            return listOfAtoms.GetAllAtoms();
        }
    }
}
