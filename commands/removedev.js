const Discord = require('discord.js');
const db = require('megadb')
const dev = new db.crearDB('dev')

module.exports = {
name: "removedev",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

 const user = message.mentions.members.first()
 if(!user) return message.channel.send("¡Debes mencionar a un staff de ShieldBot valido!")

 dev.eliminar(user.id, user.user.tag)

 message.channel.send(`<a:exactobb:851484153086214184> | ¡El usuario ${user.user.username} ha sido eliminado del staff de ShieldBot correctamente!`)

 }

} 