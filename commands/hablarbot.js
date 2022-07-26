const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')

module.exports = {
name: "hablar",
aliases: [],
category: "ayuda",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

if(message.author.id !== '825789766859358249') return message.channel.send("Solo para el creador.")

 const charla = args.join(" ")
 if(!charla) return message.channel.send("Piensa el que quieres decir.")
 message.delete()

 message.channel.send(`${charla}`)

 }
}