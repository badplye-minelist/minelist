const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});
bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'mine-list.com | -help',
            type: "STREAMING",
            url: "https://mine-list.com"
        }
    });
});
 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on('message', message => {

    if (message.content === '-website') {

       message.reply('The website is: https://mine-list.com/');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
