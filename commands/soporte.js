const Discord = require('discord.js');
const db = require('megadb');
const blacklist  = new db.crearDB('blacklist');

module.exports = {
name: "soporte",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

    const user = message.author

  if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

const embed = new Discord.MessageEmbed()

 .setTitle(`**¡Invitacion del server de soporte!**`)
 .setDescription(`**__Hola buenas si estas buscando la invite del server de soporte aqui la tienes:__**\n \`Invite:\` **[ShieldBot Soporte](https://discord.gg/QahaKHVHRu)**`)
 .setColor("#5f6df0")
 .setFooter(`${message.guild.name}`, message.guild.iconURL())

 message.channel.send(embed)

 }
}