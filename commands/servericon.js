const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')

module.exports = {
name: "servericon",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

  const user = message.author

 if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

  const servericon = new Discord.MessageEmbed()
  .setDescription(`${message.guild.iconURL({
    format: 'png',
    dynamic: true
  })}`)
  .setImage(message.guild.iconURL({dynamic: true, size : 1024 }))
  .setColor('#5f6df0')
  .setFooter(`Logo solicitado por: ${message.member.displayName}`);

  message.channel.send(servericon)

 }

}