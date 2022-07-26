const Discord = require("discord.js");
const db = require('megadb');
const blacklist  = new db.crearDB('blacklist')


module.exports = {
name: "help",
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
        .setDescription(`<a:c_botdev:851474550692511754> ¡Hola <@${message.author.id}>! Mi prefix en este servidor es \`${mainprefix}\`.\n
        <a:flecha_FD:851473148935274506>` + '`Hola! Soy ShieldBot, un bot destinado a la moderacion y proteccion! Tiene muchos comandos de moderacion e protecion, para que puedas proteger y moderar tu servidor.`' + `\n 
        > <a:advertencia:834814687375392778> **__Prefix__**\n> \`${mainprefix}\`\n> 
        > <a:emoji_16:868965518768488488> **__Comandos__**\n>  \`${mainprefix}comandos\`\n> 
        > <a:Vtz2_verificado:874405360860004404> **__Pagina web__**\n>  **[Mi Web](https://shieldbot-web.glitch.me/)**\n> 
        > <:emoji_18:868643022399762432> **__Desarrolladores__**\n> **Juanmitaa#5916**, **вfег ت#7705**\n> 
        > <:links:871375830088036382> **__Enlaces__**\n> **[Link Directo](https://discord.com/api/oauth2/authorize?client_id=900756004877246515&permissions=8&scope=bot)**`)
.setColor('#5f6df0')
.setFooter(message.guild.name, message.guild.iconURL())

message.channel.send(embed)

}
}