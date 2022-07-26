const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')

module.exports = {
name: "avatar",
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

  let usuario = message.mentions.members.first() ||
  message.member;

  let embedavatar = new Discord.MessageEmbed()

  .setTitle(`Avatar de **${usuario.user.username}**`)
  .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true }))
  .setColor('#5f6df0');

  message.channel.send(embedavatar)

 }

}