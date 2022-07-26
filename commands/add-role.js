const Discord = require('discord.js')
const db = require('megadb')
const blacklist  = new db.crearDB('blacklist')

module.exports = {
    name: "add-role",
    aliases: [],
    category: "configuracion",
    usage: "embed <text to say>",
    description: "",
    run: async(client, message, args) => {

        const user = message.author

        if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)
        let usuario = message.mentions.members.first();
        let rol = message.mentions.roles.first();
        
        if (!usuario) return message.channel.send("Menciona al usuario")
        
        if (!rol) return message.channel.send("Menciona el rol para ponerle al usuario")
        await usuario.roles.add(rol)
        message.channel.send(`Rol ${rol} agregado a ${usuario} correctamente!`)

    }
}