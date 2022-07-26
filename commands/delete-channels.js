const Discord = require('discord.js');
const db = require('megadb');

module.exports = {
name: "delete-channels",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)
        const r = new db.crearDB('antiraid');
        const back_up = new db.crearDB('backups');
        const autoBackup = await back_up.obtener(message.guild.id);
        message.guild.channels.cache.forEach(x => x.delete());
        message.author.send('Canales borrados.');
        if(r.tiene(message.guild.id)) {
            backup.load(autoBackup, message.guild);
        }
    }
}