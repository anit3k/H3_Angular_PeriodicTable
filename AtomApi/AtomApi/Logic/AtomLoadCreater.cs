namespace AtomApi.Logic
{
    /// <summary>
    /// This the concrete creator that creates a new instance of the atom loader class
    /// </summary>
    class AtomLoadCreater : Creator
    {
        /// <summary>
        /// Creates a new instance of the atom loader class
        /// </summary>
        /// <returns>new instance of atom loader</returns>
        public override IAtomLoader FactoryMethod()
        {
            return new AtomLoader();
        }
    }
}
