using AtomApi.Models;
using Newtonsoft.Json;

namespace AtomApi.Logic
{
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

        public List<AtomModel> AllAtoms
        {
            get { return _allAtoms; }
            set { _allAtoms = value; }
        }

    }
}
