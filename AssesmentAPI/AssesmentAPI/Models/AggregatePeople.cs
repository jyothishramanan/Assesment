namespace AssesmentAPI.Models
{
    public class AggregatePeople
    {
       public PeopleResult people { get;set; }
       public List< FilimResult> filimResult { get; set; }
       public List<VehicleResult> vehicleResult { get; set; }

    }
}
