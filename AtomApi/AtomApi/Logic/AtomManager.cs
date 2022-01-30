using AtomApi.Models;
using Newtonsoft.Json;

namespace AtomApi.Logic
{
    /// <summary>
    /// This class works as a manager to collect information from the .json file and convert to a list of atoms
    /// Method to get specific atom is also implemented.
    /// </summary>
    public class AtomManager
    {
        private List<AtomModel> _allAtoms;

        public AtomManager()
        {   
            AllAtoms = new List<AtomModel>();
            if (AllAtoms.Count == 0)
            {
                GetAllAtoms();
            }
        }

        private void GetAllAtoms()
        {
            if (File.Exists(AppDomain.CurrentDomain.BaseDirectory + "\\Data\\data.json"))
            {
                string tempData = File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "\\Data\\data.json");
                AllAtoms = JsonConvert.DeserializeObject<List<AtomModel>>(tempData);
            }
        }

        public AtomModel GetAtom(int id)
        {
            if (AllAtoms.Count > 0)
            {
                return AllAtoms.Find(x => x.Number == id);
            }
            return null;
        }

        public List<AtomModel> AllAtoms
        {
            get { return _allAtoms; }
            set { _allAtoms = value; }
        }

    }
}
