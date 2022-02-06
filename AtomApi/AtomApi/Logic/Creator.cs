using AtomApi.Models;

namespace AtomApi.Logic
{
    /// <summary>
    /// Getting to know the Factory design pattern, not necessary but good practice
    /// </summary>
    abstract class Creator
    {
        /// <summary>
        /// This is the factory method with the return type of IAtomLoader, this is some of the key part to
        /// make the factory pattern support polymorphism and making the classes less dependent on each other.
        /// </summary>
        /// <returns></returns>
        public abstract IAtomLoader FactoryMethod();

        /// <summary>
        /// This method is will take in the number of the atom, and return all the know properties about the current atom
        /// </summary>
        /// <param name="id">Atom number</param>
        /// <returns>Complete details about the current atom</returns>
        public AtomModel GetSingleAtom(int id)
        {
            var atom = FactoryMethod();
            return atom.GetAtomDetail(id);
        }

        /// <summary>
        /// This methtod gets a list of all the 118 known atoms in the periodic systems
        /// </summary>
        /// <returns>List of atoms</returns>
        public List<AtomModel> GetAllAtoms()
        {
            var listOfAtoms = FactoryMethod();
            return listOfAtoms.GetAllAtoms();
        }
    }
}
