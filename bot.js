const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => { //On successful login
    console.log("Up and running!");
    client.user.setPresence({ game: { name: 'Scouting Since 1910', type: 0 } });
});

client.on('message', message => {

    if (message.content === '?ping') {

       message.reply('pong');

       }

});


client.on('message', message => {

    if (message.content === '?help') {

       message.reply('below are a list of our current commands!');

       }

});

client.on('message', message => {

    if (message.content === '?about') {

       message.reply('Founded by Jordan, Julius, and Aiden, Minelist operates with a goal to provide users with an unbiased expirence. Created from the ground up, hours of work and effort have been put in to making Minelist your site!');

       }

});


client.on('message', message => {

    if (message.content === '?website') {

       message.reply('The website is: https://mine-list.com/');

       }

});


client.on('message', message => {

    if (message.content === '?help') {

       message.channel.send({embed: {
    color: 0xFF8C8C,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help Menu",
    description: "The current bot prefix is **?**\n--------------------",
    fields: [{
        name: "Help",
        value: "Shows a list of commands."
      },
      {
        name: "Website",
        value: "Gives the [website](http://mine-list.com) link."
      },
      {
        name: "Support",
        value: "Lists the easiest ways to get support."
      },
      {
        name: "About",
        value: "Learn more about Minelist!"
      },
      {
        name: "Ping",
        value: "Pong ;)."
      },
      {
        name: "Additional Features",
        value: "There are countless features we are working to add, some of these features our built into our website."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Your #1 minecraft sales site."
    }
  }
});

       }

});


 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
