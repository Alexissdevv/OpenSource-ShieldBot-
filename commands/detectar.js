const Discord = require("discord.js")
const blacklist = require("../mega_databases/blacklist.json")

module.exports = {
name: "detectar",
aliases: ["", ""],
category: "moderation",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {
        const allBlackUsers = await blacklist.find();
        const allGuildUsers = message.guild.members.cache;
        const malicious = [];
        const embed = new Discord.MessageEmbed()
        .setTitle("Cargando")
        .setDescription(`<a:cargando:871375858479271956> | \`Obteniendo información de la base de datos\``)
        .setColor("BLUE")
        let msg = await message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
        allBlackUsers.some(w => {
            const userInGuild = allGuildUsers.find(u => u.user.id === w.userId);
            const userBlack = allBlackUsers.find(u => u.userId === userInGuild.user.id)
            if(userBlack) {
                malicious.push(userBlack)
            }
        });
        let desc;
        if(malicious.length <= 0) {
            desc = `\n<:online:871375812417429514> | \`No hay maliciosos en este servidor, enhorabuena.\``
        } else {  
            desc = malicious.map((u, i) => {
                const User = message.guild.members.cache.get(u.userId);
                return `\n**${i+1}. -** ${User} | \`${User.user.id}\` - Razón: \`${u.razon}\``
            }).join(" ");
        }
        const response = new Discord.MessageEmbed()
        .setTitle("Información de la lista negra")
        .setDescription(`${desc}`)
        .setColor("BLUE")
        .setTimestamp()
        setTimeout(() => {
            msg.edit({ embeds: [response], allowedMentions: { repliedUser: false } });
        }, 3000)
    }
}