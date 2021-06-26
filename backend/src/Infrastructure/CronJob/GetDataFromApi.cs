using System;
using System.Threading;
using System.Threading.Tasks;
using Infrastructure.Parser;
using Infrastructure.Services.CronJobService;
using Microsoft.Extensions.Logging;

namespace Infrastructure.CronJob
{
  public class GetDataFromApi : CronJobService
  {
    private readonly ILogger<GetDataFromApi> _logger;
    private readonly IDataParser _dataParser;

    public GetDataFromApi(IScheduleConfig<GetDataFromApi> config, ILogger<GetDataFromApi> logger, IDataParser dataParser) : base(config.CronExpression)
    {
      _logger = logger;
      _dataParser = dataParser;
    }

    public override Task StartAsync(CancellationToken cancellationToken)
    {
      _logger.LogInformation("GetDataFromApi starts.");
      return base.StartAsync(cancellationToken);
    }

    public override async Task DoWork(CancellationToken cancellationToken)
    {
      _logger.LogInformation($"{DateTime.Now:hh:mm:ss} GetDataFromApi is working.");
      await _dataParser.GetData();
    }

    public override Task StopAsync(CancellationToken cancellationToken)
    {
      _logger.LogInformation("GetDataFromApi is stopping.");
      return base.StopAsync(cancellationToken);
    }
  }
}