const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')

module.exports = {
name: "slowmode",
aliases: [],
category: "ayuda",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

const user = message.author

if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ERROOR 78: No tienes los permisos para ejecutar el modo lento!**")

  let channel = message.channel

  let time = args[0]
  
  if(time === 'off'){
    channel.setRateLimitPerUser(0)

    return message.channel.send("El **Modo lento** ha sido **desactivado!**")
  }

  if(!time) return message.channel.send("**ERROR 99: Debes poner un tiempo  para ejecutar el modo lento!**")

  let convert = ms(time)
  let toSecond = Math.floor(convert / 1000)

  if(!toSecond || toSecond == undefined) return message.channel.send("**ERROR 12: Debes poner un tiempo válido!**")

  await channel.setRateLimitPerUser(toSecond)
  message.channel.send(`El **Modo Lento** Ha sido activado exitosamente con un tiempo definido de **${convert}**`)

  }
  
}