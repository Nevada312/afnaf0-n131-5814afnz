const { Client, Message, MessageEmbed, Collection } = require('discord.js')
const fs = require('fs')
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});

module.exports = client;

const dotenv = require('dotenv')
const envFile = dotenv.config()
const config = require('./config.json')
const prefix = config.prefix
const token = process.env['token']


client.on("ready", () => {
    console.log(`${client.user.tag} is ready!`);
    client.user.setActivity('Fairbanks Roleplay!', { type: 'WATCHING' });
    client.user.setStatus("online");

});



//new collections
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();

client.categories = fs.readdirSync('./commands');

//load the files
['command'].forEach((handler) => {
    require(`./handler/${handler}`)(client)
});

//slash commands
client.slashCommands = new Collection();

['slashCommand'].forEach((handler) => {
    require(`./handler/${handler}`)(client)
});




//We will move our token from config.json to .env
client.login(token)