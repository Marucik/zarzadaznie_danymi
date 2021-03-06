using System;
using System.Threading;
using System.Threading.Tasks;
using Cronos;
using Infrastructure.Parser;
using Microsoft.Extensions.Hosting;

namespace Infrastructure.Services.CronJobService
{
  public abstract class CronJobService : IHostedService, IDisposable
  {
    private System.Timers.Timer _timer;
    private readonly CronExpression _expression;
    protected CronJobService(string cronExpression)
    {
      _expression = CronExpression.Parse(cronExpression);
    }

    public virtual async Task StartAsync(CancellationToken cancellationToken)
    {
      await ScheduleJob(cancellationToken);
    }

    protected virtual async Task ScheduleJob(CancellationToken cancellationToken)
    {
      var next = _expression.GetNextOccurrence(DateTime.UtcNow, true);
      if (next.HasValue)
      {
        var delay = next.Value - DateTime.Now;
        if (delay.TotalMilliseconds <= 0)
        {
          await ScheduleJob(cancellationToken);
        }
        _timer = new System.Timers.Timer(delay.TotalMilliseconds);
        _timer.Elapsed += async (sender, args) =>
        {
          _timer.Dispose();
          _timer = null;

          if (!cancellationToken.IsCancellationRequested)
          {
            await DoWork(cancellationToken);
          }

          if (!cancellationToken.IsCancellationRequested)
          {
            await ScheduleJob(cancellationToken);
          }
        };
        _timer.Start();
      }
      await Task.CompletedTask;
    }

    public virtual async Task DoWork(CancellationToken cancellationToken)
    {
      Console.WriteLine("cron");
    }

    public virtual async Task StopAsync(CancellationToken cancellationToken)
    {
      _timer?.Stop();
      await Task.CompletedTask;
    }

    public virtual void Dispose()
    {
      _timer?.Dispose();
    }
  }
}