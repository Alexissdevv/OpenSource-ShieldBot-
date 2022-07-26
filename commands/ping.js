const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')

module.exports = {
name: "ping",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

  const user = message.author

  if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

  const embed4 = new Discord.MessageEmbed()
   .setTitle("<a:cargando:887111901262258207> ¡Oh...No! <a:cargando:887111901262258207>")
   .setDescription("**Alparecer estas en la lista negra del bot y en este caso no podrás usar ningún comando,lo lamento**")
   .setFooter("Necesitarás contactar con mi creador para que te quite dando motivos")
   .setColor('#5f6df0');

   if(blacklist.tiene(user.id)) return message.channel.send(embed4)

  const embed = new Discord.MessageEmbed()
  .setTitle("Ping")
  .setDescription(`**Mi latencia de retraso es la cifra de ${client.ws.ping} ms**`)
  .setColor('#5f6df0');

message.channel.send(embed) 
 
 }

}