using AssesmentAPI.Interface;
using Flurl.Http;

namespace AssesmentAPI.Proxy
{
    public class ProxyService : IProxyService
    {
        //private readonly IHttpClientFactory _httpClientFactory;
        public ProxyService()
        {
            //_httpClientFactory = httpClientFactory;
        }
        public async Task<string> GetApiResponseAsync(string url)
        {
            return await url.GetStringAsync();
            //HttpClient client = _httpClientFactory.CreateClient();

            //return await client.GetAsync(url);
        }
    }
}
