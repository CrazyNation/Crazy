const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

//AUTOROLE AND WELCOME: 

client.on('guildMemberAdd', guildMember => {
    let autoRole = guildMember.guild.roles.cache.find(role => role.name === 'Villager')
    const embed = new Discord.MessageEmbed()
    .setColor('#388d22')
    .setDescription(`Welcome To the server, make sure to check out the <#821260122897514516> channel!`)
    .setFooter(`Member # ${guildMember.guild.memberCount}`)
    guildMember.roles.add(autoRole)
    guildMember.guild.channels.cache.get('844765984367968267').send(`<@${guildMember.user.id}>`, embed)
})

//COMMAND HANDLER

client.commands = new Discord.Collection();
client.event = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler => (
    require(`./handlers/${handler}`)(client, Discord)
))

client.login(process.env.TOKEN);