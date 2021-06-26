using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Infrastructure.Parser;
using Infrastructure.Repositories;
using Core.Domain.Historical;

namespace Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class DeathsController : ControllerBase
  {
    private readonly ILogger<DeathsController> _logger;
    private readonly IDataParser _dataParser;
    private readonly IHistoricalRepository _historicalRepository;

    public DeathsController(ILogger<DeathsController> logger, IDataParser dataParser, IHistoricalRepository historicalRepository)
    {
      _logger = logger;
      _dataParser = dataParser;
      _historicalRepository = historicalRepository;
    }

    [HttpGet]
    [Route("update")]
    public async Task<IActionResult> Update()
    {
      await _dataParser.GetData();
      return Ok("Done");
    }

    [HttpGet]
    public async Task<IEnumerable<Historical>> GetByDate(DateTime date)
    {
      return await _historicalRepository.GetByDate(date);
    }
  }
}
