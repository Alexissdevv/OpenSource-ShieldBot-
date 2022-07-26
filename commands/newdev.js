const Discord = require("discord.js");
const db = require("megadb");
const dev = new db.crearDB('dev')

module.exports = {
name: "newdev",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

if(message.author.id !== '825789766859358249') return message.channel.send("No puedes usar este comando, solo el creador del bot.")

let user = message.mentions.members.first()
 if(!user) return message.channel.send("¡Debes mencionar a un usuario valido!")

 dev.establecer(user.id, user.user.tag)

 message.channel.send(`<a:exactobb:851484153086214184> | ¡${user.user.username} acabas de ser admitido en el equipo de staff de ShieldBot!`);

 }
}