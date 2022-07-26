const Discord = require('discord.js')
const db = require('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
name: "bloquear",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

      if(message.author.id !== '825789766859358249') return message.channel.send("Solo para el creador.")
        if(!parseInt(args[0]))return message.reply('Ingresa una id.')
        const bl = await blacklist.obtener('blacklist')
        if(bl.includes(args[2])) {
            message.channel.send('Esa persona ya estaba bloqueada.')
        }else{
            message.channel.send(`<@${user.id}> ha sido bloqueado en el bot.`)
            blacklist.push("blacklist", user.id)
        }
    }
}