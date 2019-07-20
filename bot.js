const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602085009570005005")
setInterval(function() {
channel.send(`A7A`);
}, 30)
})

client.login(process.env.BOT_TOKEN);