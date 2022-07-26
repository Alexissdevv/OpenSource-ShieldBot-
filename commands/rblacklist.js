const Discord = require('discord.js');
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')

module.exports = {
name: "rblacklist",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

 const user = args[0]
 if(!user) return message.channel.send("¡Debes introducir la ID de un usuario valido!")

 let razon = args.slice(1).join(' ')
 let prueba = args.slice(2).join(' ')
 blacklist.eliminar(user, razon, prueba)

const channel = client.channels.cache.get('915612237937377350');
 const embed = new Discord.MessageEmbed()

 .setTitle("Usuario removido")
 .setDescription(`<@!${user}> fue removido de la lista negra correctamente.`)
 .setImage(`${prueba}`)
 .setColor('#5f6df0')
 message.delete()
 
 channel.send(embed)
 }

} 