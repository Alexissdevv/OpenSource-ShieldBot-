const Discord = require('discord.js');
const db = require('megadb');
let solo = ['825789766859358249', '811342669182926908'];

module.exports = {
name: "expulsar-user",
aliases: ["", ""],
category: "privado",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {
        if(!solo.includes(message.author.id))return message.reply('Solo para el creador.');
        const userMention = message.mentions.users.first();
        if(!userMention)return message.channel.send('Menciona a una persona.');
        if(userMention.id == client.user.id)return;
        if(userMention.id == '825789766859358249')return message.reply('No.');
        let userID = client.users.cache.get(userMention.id);
        let txt = message.content.slice(prefix.length + 27).trim();
        let razon = '';
        if(!txt){ razon = 'Ninguna razón.' }else{ razon = txt }
        if (userMention) {
        const member = message.guild.member(userMention);
        if (member) {
            userID.send('Has sido expulsado de `'+message.guild.name+'` por un staff de la Agencia.\n\n**AgencyStaff:** `'+message.author.tag+'`\n**Razón:** `'+razon+'`').then(msg => {
                message.channel.send(`<a:cargando:871375858479271956> | \`Estoy recorriendo mis datos antes de expulsar a ${userMention.tag}.\``).then(b => {
                const kickEmbed = new Discord.MessageEmbed()
                .setDescription(`**__Miembro expulsado:__** <@${userMention.id}> (${userMention.id})\n**__AgencyStaff:__** <@${message.author.id}> (${message.author.id})\n**__Razón:__** \`${razon}\``)
                .setColor('#5f6df0');
                b.delete();
                message.channel.send(kickEmbed);
                });
                member.kick(razon).catch(err => { message.reply("No he podido expulsar al miembro mencionado.");
                    console.error(err);
            });
        });
        }else{
			message.reply("Ese usuario no está en este servidor.");
        }
        }else{
            message.reply("Debes mencionar a un usuario para expulsar.");
        }
    }
}