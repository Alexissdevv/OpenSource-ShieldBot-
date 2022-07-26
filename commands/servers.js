	const Discord = require('discord.js');
	const client = new Discord.Client();
	const { Client, MessageEmbed } = require('discord.js');

module.exports = {
name: "servers",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

	if(message.author.id !== "825789766859358249") return message.channel.send("Solamente mi creador puede usar este comando!")

    const embed = new Discord.MessageEmbed()

    .setTitle(`Estoy en: ${client.guilds.cache.size} Servidores `)
    .setDescription(`**Los servidores son: ${client.guilds.cache.map(a => a.name)}**`)
    .setColor('#5f6df0');

message.channel.send("Revisa tus mensajes privados ✔ ")
  message.author.send(embed)


  }

}