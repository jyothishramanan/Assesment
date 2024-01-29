namespace AssesmentAPI.Models
{
    public class VehicleResult
    {
        public string name { get; set; }
        public string model { get; set; }
        public string manufacturer { get; set; }
        public string cost_in_credits { get; set; }
        public string length { get; set; }
        public string max_atmosphering_speed { get; set; }
        public string crew { get; set; }
        public string passengers { get; set; }
        public string cargo_capacity { get; set; }
        public string consumables { get; set; }
        public string vehicle_class { get; set; }
        public List<string> pilots { get; set; }
        public List<string> films { get; set; }
        public DateTime created { get; set; }
        public DateTime edited { get; set; }
        public string url { get; set; }
    }

    public class Vehicle
    {
        public int count { get; set; }
        public string next { get; set; }
        public object previous { get; set; }
        public List<VehicleResult> results { get; set; }
    }

}
