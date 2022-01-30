namespace AtomApi.Models
{
    public class AtomModel
    {
        #region fields
        private string _name;
        private string _symbol;
        private int _period;
        private int _number;
        private int _xpos;
        private int _ypos;
        private string _category;
        private string _appearance;
        private float _atomicMass;
        private string _discoveredBy;
        private int[] _shells;
        private string _source;
        private string _summary;
        #endregion

        #region Constructor
        public AtomModel()
        {

        }
        #endregion

        #region Properties
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
        public string Symbol
        {
            get { return _symbol; }
            set { _symbol = value; }
        }
        public int Period
        {
            get { return _period; }
            set { _period = value; }
        }
        public int Number
        {
            get { return _number; }
            set { _number = value; }
        }
        public int Xpos
        {
            get { return _xpos; }
            set { _xpos = value; }
        }
        public int Ypos
        {
            get { return _ypos; }
            set { _ypos = value; }
        }        
        public string Category
        {
            get { return _category; }
            set { _category = value; }
        }
        public string Appearance
        {
            get { return _appearance; }
            set { _appearance = value; }
        }
        public float Atomic_Mass
        {
            get { return _atomicMass; }
            set { _atomicMass = value; }
        }
        public string Discovered_by
        {
            get { return _discoveredBy; }
            set { _discoveredBy = value; }
        }
        public int[] Shells
        {
            get { return _shells; }
            set { _shells = value; }
        }
        public string Source
        {
            get { return _source; }
            set { _source = value; }
        }
        public string Summary
        {
            get { return _summary; }
            set { _summary = value; }
        }
        #endregion
    }
}
