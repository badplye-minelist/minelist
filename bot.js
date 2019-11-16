const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});
bot.user.setPresence({ status: 'online', game: { name: 'mine-list.com | -help' } });
 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});


client.on('message', message => {

    if (message.content === '!help') {

       message.reply('The commands I offer are:\n\n**!help** | Shows a list of commands.\n**!website** | Gives a website link.');

       }

});

client.on('message', message => {

    if (message.content === '!website') {

       message.reply('The website is: https://mine-list.com/');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
