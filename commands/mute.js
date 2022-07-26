const Discord = require('discord.js')
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')
const ms = require('ms')
const muterol = new db.crearDB("muterol")

module.exports = {
name: "mute",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

    const user = message.author

  if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")
        
 var perms = message.member.hasPermissions('MANAGE_ROLES')
 if(!perms) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)

 let time = args[1]
 if(!time) return message.channel.send("Debes decir un tiempo para mutear.")

 let timer = ms(time)

 let mencionado = message.mentions.member.first()
 if(!mencionado) return message.channel.send("Debes mencionar a un usuario para mutear.")

 var razon = args[2]
 if(!razon){
     razon = 'No especificada'
 }

 if(!muterol.tiene(message.guild.id)) return message.channel.send("El servidor no tiene ningun rol para mutear.")

 let rol = await muterol.obtener(message.guild.id)

 if(mencionado.roles.cache.has(rol)) return message.channel.send("Este usuario ya estaba muteado.")

 mencionado.roles.add(rol)

 message.channel.send(`El usuario ${mencionado} ha sido muteado durante ${time} por ${razon}`)

 await setTimeout(async function() {
     await mencionado.roles.remove(rol)

     await message.channel.send(`El tiempo de muetado se acabo ${mencionado}.`).catch(error =>{
         message.channel.send(`¡Oh, no! Hubo un error inesperado. **${error}**`)
     })
 }, timer) 

    }
}