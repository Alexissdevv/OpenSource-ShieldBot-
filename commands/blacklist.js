const Discord = require('discord.js');
const db = require('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
name: "blacklist-add",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

 if(message.author.id !== '825789766859358249') return message.channel.send("No puedes usar este comando, solo el creador del bot.")

 let user = args[0]
 if(!user) return message.channel.send("¡Debes introducir la ID de un usuario valido!")

 let razon = args.slice(1).join(' ')
 let prueba = args.slice(2).join(' ')
 blacklist.establecer(user, razon, prueba)

const channel = client.channels.cache.get('915612237937377350');

const embed = new Discord.MessageEmbed()
.setTitle("Usuario añadido")
.setDescription(`<@!${user}> fue añadido a la lista negra correctamente. <:online:871375812417429514>\n Razon: \`${razon}\``)
.setColor('#5f6df0')
.setImage(`${prueba}`)
.setFooter(message.guild.name, message.guild.iconURL());
  message.delete()
channel.send(embed)


    }

  } 