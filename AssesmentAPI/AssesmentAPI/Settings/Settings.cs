namespace AssesmentAPI.Settings
{
    public class Settings
    {
        public AppConfigurationSettings AppConfiguration { get; set; }

        public class AppConfigurationSettings
        {
            public string VehicleURL { get; set; }
            public string PeopleURL { get; set; }
            public string PlanetURL { get; set; }
        }

    }
}
