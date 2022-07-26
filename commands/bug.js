const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')

module.exports = {
name: "bug",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

  const user = message.author

  if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

 const reporte = args.join(" ")
 if(!reporte) return message.channel.send("Debes decir el reporte!")


 const embed = new Discord.MessageEmbed()

  .setTitle("Reporte")
  .setDescription(`El usuario __**${message.author.username}**__ ha hecho un reporte en el servidor __**${message.guild.name}**__. __**Reporte:**__ \n\n**${reporte}**`)
  .setFooter("¡Arreglalo!")
  .setColor("#5f6df0")

  client.users.cache.get('825789766859358249').send(embed)

 }

}