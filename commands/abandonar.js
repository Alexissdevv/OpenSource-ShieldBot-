const Discord = require('discord.js');
const db = require('megadb');
let solo = ['825789766859358249'];

module.exports = {
name: "abandonar",
aliases: ["", ""],
category: "configuracion",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {
        if(!solo.includes(message.author.id))return message.reply('Solo para el creador.');
        message.channel.send(`Entendido <@${message.author.id}> (Creador)\n\nAbandonaré este servidor y no volveré a dejar que me añadan a este de nuevo.`).then(a => {
            client.guilds.cache.get(message.guild.id).leave();
        });
    }
}