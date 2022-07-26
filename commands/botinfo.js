const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('megadb');
const blacklist  = new db.crearDB('blacklist');


module.exports = {
name: "botinfo",
aliases: [],
category: "ayuda",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

    const user = message.author

  if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

const embed = new Discord.MessageEmbed()

.setTitle("**¡Informacion ShieldBot!**")
.setThumbnail('https://cdn.discordapp.com/attachments/875132176335773757/915652973814775859/shieldbotnavidad.png')
.setDescription(`**Nombre del bot:** \`ShieldBot#8722\`\n**ID:** \`900756004877246515\`\n**Version:** \`v2.3.5\`\n**Dependencias:** \`[discord.js, fs, js-yaml, express, megadb, chalk, discord-buttons, alexa-bot-api]\`\n**Confianza:** \`Actualmente en proceso\`\n**Servidores actuales:** \`${client.guilds.cache.size}\`\n**Usuarios en el cache:** \`${client.users.cache.size}\`\n`)
.setColor('#5f6df0')
.setFooter(`${message.guild.name}`, message.guild.iconURL())

message.channel.send(embed)

 }
}