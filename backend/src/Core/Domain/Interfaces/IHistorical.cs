using System;

namespace Core.Domain.Interfaces
{
  public interface IHistorical
  {
    Guid Id { get; }
    string Country { get; set; }
    int Deaths { get; set; }
    int Confirmed { get; set; }
    DateTime Date { get; set; }
  }
}