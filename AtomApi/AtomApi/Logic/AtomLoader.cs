﻿using AtomApi.Models;
using Newtonsoft.Json;

namespace AtomApi.Logic
{
    /// <summary>
    /// This class works as a manager to collect information from the .json file and convert to a list of atoms
    /// Method to get specific atom is also implemented.
    /// </summary>
    public class AtomLoader : IAtomLoader
    {
        private List<AtomModel> _allAtoms;
        private AtomModel _atomDetail;
        

        public AtomLoader()
        {   
            AllAtoms = new List<AtomModel>();
            if (AllAtoms.Count == 0)
            {
                LoadAllAtoms();
            }
        }

        private void LoadAllAtoms()
        {
            if (File.Exists(AppDomain.CurrentDomain.BaseDirectory + "\\Data\\data.json"))
            {
                string tempData = File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "\\Data\\data.json");
                AllAtoms = JsonConvert.DeserializeObject<List<AtomModel>>(tempData);
            }
        }        

        public AtomModel GetAtomDetail(int id)
        {
            AtomDetail = AllAtoms.Find(x => x.Number == id);
            return AtomDetail;
        }

        public List<AtomModel> GetAllAtoms()
        {
            return AllAtoms;
        }

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
    }
}
