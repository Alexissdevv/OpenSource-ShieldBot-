const Discord = require('discord.js');
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')

module.exports = {
    name: "clear",
    description: "",
    run: async (client, message, args) => {
  
   const user = message.author

   if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

   const cantidad = args.join(' ')

   var perms = message.member.hasPermission("MANAGE_MESSAGES")
if(!perms)return message.channel.send("<a:loading:851485315238854776> | ¡Necesitas el permiso de gestionar mensajes para usar este comando!")

   if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<a:loading:851485315238854776> | ¡Necesito el permiso de gestionar mensajes!")

   if(!cantidad) return message.channel.send("<a:loading:851485315238854776> | ¡No escribiste la cantidad (1-100)!")

   if(cantidad === '0') return message.channel.send("<a:loading:851485315238854776> | ¡Debes escribir un número mayor a 0!")


message.channel.bulkDelete(cantidad).then(() => {
  message.channel.send(`<a:exactobb:851484153086214184> |  **${cantidad}** mensajes borrados correctamente`)
  message.delete()
    
})

 }

} 