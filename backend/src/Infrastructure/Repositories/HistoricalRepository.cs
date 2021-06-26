using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Domain.Historical;
using Infrastructure.Mongo;
using MongoDB.Driver;

namespace Infrastructure.Repositories
{
  public class HistoricalRepository : IHistoricalRepository
  {
    private readonly IMongoCollection<Historical> _collection;
    private readonly MongoDbsettings _mongoDbSettings;

    public HistoricalRepository(IMongoClient client, MongoDbsettings mongoDbSettings)
    {
      _mongoDbSettings = mongoDbSettings;
      var database = client.GetDatabase(_mongoDbSettings.DatabaseName);
      _collection = database.GetCollection<Historical>("historical");
    }

    public async Task<IEnumerable<Historical>> GetByDate(DateTime date)
    {
      return await _collection.Find(x => x.Date == date.ToUniversalTime()).SortByDescending(x => x.Deaths).ToListAsync();
    }

    public async Task InsertAsync(Historical entity)
    {
      await _collection.InsertOneAsync(entity);
    }
  }
}