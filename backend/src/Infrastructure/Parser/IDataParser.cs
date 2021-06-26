using System.Threading.Tasks;

namespace Infrastructure.Parser
{
  public interface IDataParser
  {
    Task GetData();
  }
}