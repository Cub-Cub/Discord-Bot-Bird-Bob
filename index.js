const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('NzM5NzI1MjExNTI3NTQ0ODQ0.XyeoyQ.i0MaqDOi2trvomeuzw_ehdBS3pI'); // bot token, exclusive for my bot

function birdBob (mes) {
	var remes = "";
	var curChar = 'a'; // just initalization

	var i = 0;
	while(i < mes.length){
		var d = Math.random();
		if (d < 0.5){ // 50% chace to be uppercase other 50% chance to be lower case
			curChar = mes.charAt(i).toUpperCase();
			remes = remes.concat(curChar);
		} else {
			curChar = mes.charAt(i).toLowerCase();
			remes = remes.concat(curChar);
		}
		i++;
	}
	return remes;
}

var counter = 0;
client.on('message', message => { // listen to all messages
	if (message.author.bot === false){ // this keeps the bot from mocking itself and other bots
		var d = Math.random();
		counter++;
		console.log(counter);
		if (d < 0.01) { // 1% to mock
			counter = 0;
			message.channel.send(birdBob(message.content));
		} 
			
	}
});




