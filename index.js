const Discord = require('discord.js');
const client = new Discord.Client();

var botID = '739725211527544844';

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

client.once('ready', () => {
	console.log('Ready!');
});

client.login(''); // bot token, exclusive for my bot

var counter = 0;
client.on('message', message => { // listen to all messages
	var mesID = [];
	mesID.push(message.id);
	if (message.content.startsWith('<@')){
		var uid;
		if (message.content.charAt(2) == '!') {
			uid = message.content.slice(3, -1);
		} else {
			uid = message.content.slice(2, -1);
		}
		if (uid == botID){
			//message.delete();
			//mesID.pop();
			//message.channel.send(birdBob(message.channel.messages.lastMessage.content));
			console.log(message.channel.messages.fetch(mesID[1]));
		}
	}
	else if (message.author.bot === false){ // this keeps the bot from mocking itself and other bots
		var d = Math.random();
		counter++;
		console.log(counter);
		if (d < 0.01) { // 1% to mock
			counter = 0;
			message.channel.send(birdBob(message.content));
		} 
			
	}
});




