const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NjgzMzk3NDU2OTk3Nzc3NDc4.Xlq-LA.poDDZ3BkoBkd1vndM9HOL2hhuQM');

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'panemas chillist',
            type: "STREAMING",
            url: "https://www.youtube.com/watch?v=AQ5_dXgYkMc"
        }
    });
});

bot.on('message', msg => {
    if (msg.channel.type == "dm") {
      msg.author.send("panemas chillist röökihuules (lämä sinist)");
      return;
    }
  });