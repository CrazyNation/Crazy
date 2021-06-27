const Discord = require('discord.js')
module.exports = async (Discord, client, message) => {
    const prefix = `-`;
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(message.channel.type === "dm") {
        message.channel.send('Err Message')
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command) command.execute(client, message, args, cmd, Discord);
}