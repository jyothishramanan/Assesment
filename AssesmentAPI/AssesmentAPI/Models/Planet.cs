namespace AssesmentAPI.Models
{
    
    public class PlanetResult
    {
        public string name { get; set; }
        public string rotation_period { get; set; }
        public string orbital_period { get; set; }
        public string diameter { get; set; }
        public string climate { get; set; }
        public string gravity { get; set; }
        public string terrain { get; set; }
        public string surface_water { get; set; }
        public string population { get; set; }
        public List<string> residents { get; set; }
        public List<string> films { get; set; }
        public DateTime created { get; set; }
        public DateTime edited { get; set; }
        public string url { get; set; }
    }

    public class Planet
    {
        public int count { get; set; }
        public string next { get; set; }
        public object previous { get; set; }
        public List<PlanetResult> results { get; set; }
    }
}
