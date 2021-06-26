using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Domain.Interfaces;

namespace Infrastructure.Repositories
{
  public interface IRepository<T> where T : IEntity
  {
    Task<IEnumerable<T>> GetByDate(DateTime date);
    Task InsertAsync(T entity);
  }
}