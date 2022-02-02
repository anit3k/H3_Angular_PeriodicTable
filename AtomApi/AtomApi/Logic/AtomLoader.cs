using AtomApi.Models;
using Newtonsoft.Json;

namespace AtomApi.Logic
{
    /// <summary>
    /// This class works as a loader to collect information from the .json file and convert to a list of atoms
    /// Method to get specific atom is also implemented.
    /// </summary>
    public class AtomLoader : IAtomLoader
    {
        #region fields
        private List<AtomModel> _allAtoms;
        private AtomModel _atomDetail;
        #endregion

        #region Default Constructor
        public AtomLoader()
        {   
            AllAtoms = new List<AtomModel>();
            if (AllAtoms.Count == 0)
            {
                LoadAllAtoms();
            }
        }
        #endregion

        #region Methods
        /// <summary>
        /// Loads all atoms from .json file, runs only if the list is empty!
        /// </summary>
        private void LoadAllAtoms()
        {
            if (File.Exists(AppDomain.CurrentDomain.BaseDirectory + "\\Data\\data.json"))
            {
                string tempData = File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "\\Data\\data.json");
                AllAtoms = JsonConvert.DeserializeObject<List<AtomModel>>(tempData);
            }
        }
        /// <summary>
        /// Used to get a single atom, to view the details
        /// </summary>
        /// <param name="id">Atom number</param>
        /// <returns>a single atom</returns>
        public AtomModel GetAtomDetail(int id)
        {
            AtomDetail = AllAtoms.Find(x => x.Number == id);
            return AtomDetail;
        }
        /// <summary>
        /// Used to get the complete list of all 118 atoms
        /// </summary>
        /// <returns>All 118 atoms in a list</returns>
        public List<AtomModel> GetAllAtoms()
        {
            return AllAtoms;
        }
        #endregion

        #region Properties
        public List<AtomModel> AllAtoms
        {
            get { return _allAtoms; }
            set { _allAtoms = value; }
        }
        public AtomModel AtomDetail
        {
            get { return _atomDetail; }
            set { _atomDetail = value; }
        }
        #endregion
    }
}
