const Discord = module.require("discord.js");
const db = require('megadb');
const blacklist  = new db.crearDB('blacklist');

module.exports = {
   name: "lock",
   description: "Locks a Channel",
   usage: "lock <channel>",
  args: true,
 category: "moderation",
   run: async(client, message, args) => {

    const user = message.author

  if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("Necesito permiso de __Administrador__.")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("<a:flecha_FD:851473148935274506> Informacion")
   .setDescription(`🔒 ${message.channel} Canal bloqueado!`)
   .setColor('#5f6df0');
   await message.channel.send(embed);
   message.delete();
}
}