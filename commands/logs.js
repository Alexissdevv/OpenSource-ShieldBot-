const Discord = require('discord.js');
const db = require('megadb');
const infoEmbed = new Discord.MessageEmbed().setTitle('<a:flecha_FD:905105040157577266> Información.').setColor('#5f6df0');

module.exports = {
name: "logs",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)
        const logs = new db.crearDB('logs');
        if(logs.tiene(message.guild.id)) {
            logs.eliminar(message.guild.id);
            infoEmbed.setDescription('`Logs desactivados.`');
            message.channel.send(infoEmbed);
            return;
        }
        if(!logs.tiene(message.guild.id)) {
            let ping = message.mentions.channels.first();
            if(!ping)return message.channel.send('Menciona un canal para establecer los logs.');
            let asd = [];
            message.guild.channels.cache.forEach(x => {
                asd.push(x.id);
            });
            if(!asd.includes(ping.id))return message.channel.send('Ese canal no es de este servidor.');
            logs.establecer(message.guild.id, ping.id);
            infoEmbed.setDescription('`El canal `<#'+ping.id+'>` ha sido establecido como canal de logs.`');
            message.channel.send(infoEmbed);
            return;
        }
    }
}