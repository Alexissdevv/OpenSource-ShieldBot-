const Discord = require("discord.js")
const db = require('megadb')
const muterol = new db.crearDB("muterol")

module.exports = {
name: "set-muterole",
aliases: ["", ""],
category: "configuracion",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

    const user = message.author

 if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)

  let rol = message.mentions.roles.first();
  if(!rol) return message.channel.send("Debes mencionar un rol.")

  muterol.establecer(message.guild.id, rol.id)

  message.channel.send(`Se ha establecido el rol ${rol.name} como rol para mutear.`)

 }
}