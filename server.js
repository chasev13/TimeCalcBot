const Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

client.on('message', message => {
  if (message.content.includes('help') && message.content.includes('timecalc')){
      message.reply('Usage: `!timecalc <time>+<mins>`');
  }
  
  else if (message.content.startsWith('!timecalc')){
      var query = message.content.split(' ')[1];
      var [time, mins] = query.split('+');
      mins = +mins;
      time = time.split(':');
      
      time[0] = +time[0];
      time[1] = +time[1];
    
      time[1] = mins + time[1]
    while (time[1] > 59){
      time[0] += 1;
      time[1] -= 60;
    }
    var reply = `${time[0]}:`;
    
    if (time[1] > 9)
      reply += time[1];
    else
      reply += "0" + time[1];
    
    message.reply(reply);
   
  }
 
});

client.login(BOT_TOKEN);


