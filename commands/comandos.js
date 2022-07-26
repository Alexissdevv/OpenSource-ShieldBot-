const Discord = require("discord.js");
const db = require('megadb');
const blacklist  = new db.crearDB('blacklist');


module.exports = {
name: "comandos",
aliases: [],
category: "ayuda",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

    const user = message.author

  if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

  let mainprefix = "sh!";

 const embed = new Discord.MessageEmbed()

 .setThumbnail('https://cdn.discordapp.com/attachments/875132176335773757/915652973814775859/shieldbotnavidad.png')
 .setDescription(`Prefix: \`${mainprefix}\`\nPara saber sobre mis comandos usa \`${mainprefix}biblioteca\`\n<@${message.author.id}> estos son mis comandos principales:\n 
<:seguridad:904751004380184637> | **Comandos Antiraid**\n \`${mainprefix}antiraid\`, \`${mainprefix}antibots\`, \`${mainprefix}antitokens\`, \`${mainprefix}antilinks\`, \`${mainprefix}kick-maliciosos\`, \`${mainprefix}delete-channels\`, \`${mainprefix}warn-entry\`\n <:moderacion:904750856451276920> | **Comandos Moderacíon**\n \`${mainprefix}ban\`, \`${mainprefix}clear\`, \`${mainprefix}mute\`, \`${mainprefix}slowmode\`, \`${mainprefix}unmute\`, \`${mainprefix}unlock\`\n <:configuracion:904750781327097916> | **Comandos Configuracíon**\n \`${mainprefix}status\`, \`${mainprefix}add-role\`, \`${mainprefix}del-role\`, \`${mainprefix}set-muterole\`\n <:otros:904750952416964608> | **Comandos Informacíon**\n \`${mainprefix}botinfo\`, \`${mainprefix}avatar\`, \`${mainprefix}bug\`, \`${mainprefix}invite\`, \`${mainprefix}me\`, \`${mainprefix}ping\`, \`${mainprefix}servericon\`, \`${mainprefix}soporte\`, \`${mainprefix}web\`\n __**<:links:871375830088036382> Links**__\n [Soporte](https://discord.gg/QahaKHVHRu) - [Invite](https://discord.com/api/oauth2/authorize?client_id=900756004877246515&permissions=8&scope=bot) - [Pagina web](https://shieldbot-web.glitch.me/)`)
.setColor('#5f6df0')
.setFooter(message.guild.name, message.guild.iconURL())

message.channel.send(embed)

}
}