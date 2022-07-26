const Discord = require('discord.js');
const db = require('megadb');
const blacklist  = new db.crearDB('blacklist')

module.exports = {
name: "me",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

    if (!blacklist.has(message.author.id)) return message.channel.send('<a:exactobb:851484153086214184> | `No estas en mi base de datos como un usuario malicioso!`')
    message.channel.send("<a:No:851567079890747392> | `Estas registrado en mi base de datos como un usuario malicioso.`")
  }

}