const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')
const antijoins = new db.crearDB(`antijoins`);

module.exports = {
name: "antijoins",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

  const user = message.author

  if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)

const embed1 = new Discord.MessageEmbed()
.setTitle(`Comandos Antijoins 👤`)
.setDescription('`antijoins on` - Activa el antijoins\n`antijoins off`- Desactiva el antijoins')
.setFooter(`${message.guild.name}`, message.guild.iconURL())
.setColor('#5f6df0')

if(!args[0]) return message.channel.send(embed1)


if(args[0] === "on") {
if(antijoins.tiene(message.guild.id)) return message.channel.send(`El antijoins ya esta activado en el servidor`)
antijoins.establecer(message.guild.id, message.guild.name)
const embed = new Discord.MessageEmbed()

 .setDescription(`<a:c_rey:834881479263780896> **Antijoins**\n El Antijoins se ha actualizado\n Habilitado: <:online:871375812417429514>`)
 .setColor('#5f6df0')

 message.channel.send(embed)
}

if(args[0] === "off") {
if(!antijoins.tiene(message.guild.id)) return message.channel.send(`El antijoins no esta activado en el servidor`)
antijoins.eliminar(message.guild.id, message.guild.name)
const embed2 = new Discord.MessageEmbed()

 .setDescription(`<a:c_rey:834881479263780896> **Antijoins**\n El Antijoins se ha actualizado\n Desabilitado: <:dnd:871375845594378240>`)
 .setColor('#5f6df0')

 message.channel.send(embed2)
}
}
}