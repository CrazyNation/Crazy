module.exports = {
    name: 'ban',
    description: "bans people",
    async execute(client, message, args, cmd, Discord){
        const member = message.mentions.users.first();
        
        if(message.member.hasPermission('BAN_MEMBERS')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send("User has been banned");
            }else{
                message.channel.send('You couldnt ban that member because no member was mentioned');
            }
        }else {
            message.channel.send('You must have `BAN MEMBERS` to run this command!')
        }
        
       
    }
}