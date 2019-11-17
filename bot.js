const Discord = require('discord.js');

const client = new Discord.Client();
const helpembed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(helpembed);
 

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

    if (message.content === '?embed') {
     
     channel.send({ embed: helpembed });
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

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
