using System;
using Core.Domain.Interfaces;

namespace Core.Domain.Historical
{
  public class Historical : IEntity, IHistorical
  {
    public Guid Id { get; private set; }
    public string Country { get; set; }
    public int Deaths { get; set; }
    public int Confirmed { get; set; }
    public DateTime Date { get; set; }

    public Historical(string country, int deaths, int confirmed, DateTime date)
    {
      Id = new Guid();
      Country = country;
      Deaths = deaths;
      Confirmed = confirmed;
      Date = date;
    }
  }
}