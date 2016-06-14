using System.Net.Configuration;
using Microsoft.AspNet.SignalR;

namespace MemeRoulette.Core
{
    public class TheHub : Hub
    {

        public void SendMessage(string message)
        {
            Clients.All.sendMessage(message);
        }
    }
}