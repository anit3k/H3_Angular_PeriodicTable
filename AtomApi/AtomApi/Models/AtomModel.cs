using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        #endregion
    }
}
