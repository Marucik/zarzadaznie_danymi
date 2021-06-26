using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Core.Domain.Historical;
using Infrastructure.Repositories;

namespace Infrastructure.Parser
{
  public class DataParser : IDataParser
  {
    private readonly IHttpClientFactory _clientFactory;
    private readonly IHistoricalRepository _historicalRepository;

    public DataParser(IHttpClientFactory clientFactory, IHistoricalRepository historicalRepository)
    {
      _clientFactory = clientFactory;
      _historicalRepository = historicalRepository;
    }

    public async Task GetData()
    {
      var request = new HttpRequestMessage(HttpMethod.Get,
            "https://covid-api.mmediagroup.fr/v1/cases");
      var client = _clientFactory.CreateClient();

      var response = await client.SendAsync(request);

      if (response.IsSuccessStatusCode)
      {
        using var responseStream = await response.Content.ReadAsStreamAsync();
        var result = await JsonSerializer.DeserializeAsync<Dictionary<string, Dictionary<string, Dictionary<string, dynamic>>>>(responseStream);

        foreach (var item in result)
        {
          if (item.Value["All"].ContainsKey("updated"))
          {

            var deaths = Int32.Parse(item.Value["All"]["deaths"].GetRawText());
            var confirmed = Int32.Parse(item.Value["All"]["confirmed"].GetRawText());
            string dateString = item.Value["All"]["updated"].GetRawText();
            string trimmed = dateString.Replace('"', ' ');
            var date = DateTime.Parse(trimmed);
            var normalized = new DateTime(date.Year, date.Month, date.Day);

            var entity = new Historical(item.Key, deaths, confirmed, normalized);

            await _historicalRepository.InsertAsync(entity);
          }
        }
      }
    }
  }
}