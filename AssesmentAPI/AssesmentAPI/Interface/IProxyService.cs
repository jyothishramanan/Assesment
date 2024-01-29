namespace AssesmentAPI.Interface
{
    public interface IProxyService
    {
        Task<string> GetApiResponseAsync(string url);
    }
}
