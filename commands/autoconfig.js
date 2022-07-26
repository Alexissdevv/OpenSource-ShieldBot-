const Discord = require('discord.js')
const { crearDB } = require('megadb')
const db = require('megadb')
const blacklist = new db.crearDB('blacklist')
const autoconfig = new db.crearDB('autoconfig')

module.exports = {
    name: "autoconfig",
    aliases: ["", ""],
    category: "configuracion",
    usage: "embed <text to say>",
    description: "",
    run: async(client, message, args) => {

        const user = message.author

        if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")
          if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)
          

    }
}