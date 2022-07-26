const Discord = require('discord.js');
const db = require('megadb');
let solo = ['825789766859358249', '811342669182926908'];

module.exports = {
name: "banear-user",
aliases: ["", ""],
category: "privado",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {
        if(!solo.includes(message.author.id))return message.reply('Solo para el creador.');
        let userMention = message.mentions.users.first();
        if(!userMention)return message.channel.send('Menciona a una persona.');
        if(userMention.id == client.user.id)return;
        if(userMention.id == '825789766859358249')return message.reply('No.');
        let razon = '';
        if(!args.join(' ')){ razon = 'Ninguna razón.' }else{ razon = args.slice(1).join(' '); }
        if(!message.guild.member(userMention).bannable) return message.reply('No puedo banear al usuario mencionado.');  
        let userID = client.users.cache.get(userMention.id);
        userID.send('Has sido baneado de `'+message.guild.name+'` por un staff de la Agencia.\n\n**AgencyStaff:** `'+message.author.tag+'`\n**__Razón:__** `'+razon+'`');
        message.guild.member(userMention).ban({reason: razon});
        const banEmbed = new Discord.MessageEmbed()
        .setDescription(`**__Miembro baneado:__** <@${userMention.id}> (${userMention.id})\n\n**__AgencyStaff:__** <@${message.author.id}> (${message.author.id})\n\n**__Razón:__** \`${razon}\``)
        .setTimestamp().setColor('#5f6df0')
        message.channel.send(banEmbed);
    }
}