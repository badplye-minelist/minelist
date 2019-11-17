const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => { //On successful login
    console.log("Up and running!");
    client.user.setPresence({ game: { name: 'mine-list.com | ?help', type: 0 } });
});

client.on('message', message => {

    if (message.content === '?ping') {

       message.reply('pong');

       }

});


client.on('message', message => {

    if (message.content === '?help') {

       message.reply('The commands I offer are:\n\n**?help** | Shows a list of commands.\n**?website** | Gives a website link.\n**?suppport** | Lists easiest ways to get support.\n**?about** | Learn more about Minelist!\n**?ping** | Pong ;).');

       }

});

client.on('message', message => {

    if (message.content === '?support') {

       message.reply('Need some help? Submit a ticket at https://mine-list.com/support/\n\nAlternatively, you can reach out to an admin via __admin@mine-list.com__!');

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

    if (message.content === '?embed') {

       message.channel.send({embed: {
    color: 0xFF8C8C,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help",
    url: "http://mine-list.com",
    description: "The current bot prefix is **?**",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Minelist"
    }
  }
});

       }

});


 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
