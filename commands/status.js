const Discord = require('discord.js');
const db = require('megadb');
const infoEmbed = new Discord.MessageEmbed().setTitle('<a:flecha_FD:851473148935274506> Información.').setColor('#284df7');
const blacklist  = new db.crearDB('blacklist');

module.exports = {
name: "status",
aliases: ["", ""],
category: "configuracion",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

    const user = message.author

  if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)

message.channel.send('<a:cargando:871375858479271956> | `Recopilando datos del servidor.`').then(msg => {
            setTimeout(() => {

const embed = new Discord.MessageEmbed()
                .setDescription(`Status Del Servidor \`${message.guild.name}\`\nPrefix: sh!\n> **Miembros actuales:** ${message.guild.memberCount}\n> **Cantidad de Roles:** ${message.guild.roles.cache.size}\n> **Creado el:** ${message.guild.joinedAt.toDateString()}\n> **Region:** ${message.guild.region}`)
                .setFooter(`${message.guild.name}, ${message.guild.id}`, message.guild.iconURL())
                const antibots = new db.crearDB('antibots');
                if(antibots.tiene(message.guild.id)){embed.addField('🤖 | Antibots', `Habilitado: <:online:871375812417429514>`, true)}else{embed.addField('🤖 | Antibots', `Desabilitado: <:dnd:871375845594378240>`, true)}
                const antijoins = new db.crearDB('antijoins');
                if(antijoins.tiene(message.guild.id)){embed.addField('👥 | AntiJoins', `Habilitado: <:online:871375812417429514>`, true)}else{embed.addField('👥 | AntiJoins', `Desabilitado: <:dnd:871375845594378240>`, true)}
                const kickmaliciosos = new db.crearDB('kickmaliciosos');
                if(kickmaliciosos.tiene(message.guild.id)){embed.addField('🚨 | Expulsar Maliciosos', `Habilitado: <:online:871375812417429514>`, true)}else{embed.addField('🚨 | Expulsar Maliciosos', `Desabilitado: <:dnd:871375845594378240>`, true)}
                const antilinks = new db.crearDB('antilinks');
                if(antilinks.tiene(message.guild.id)){embed.addField('🔗 | AntiLinks', `Habilitado: <:online:871375812417429514>`, true)}else{embed.addField('🔗 | AntiLinks', `Desabilitado: <:dnd:871375845594378240>`, true)}
                const warnentry = new db.crearDB('warnentry');
                if(warnentry.tiene(message.guild.id)){embed.addField('📣 | Warn Entry', `Habilitado: <:online:871375812417429514>`, true)}else{embed.addField('📣 | Warn Entry', `Desabilitado: <:dnd:871375845594378240>`, true)}
                const secondCheck = new db.crearDB('antitokens');
                if(secondCheck.tiene(message.guild.id)){embed.addField('🌊 | AntiTokens', `Habilitado: <:online:871375812417429514>`, true)}else{embed.addField('🌊 | AntiTokens', `Desabilitado: <:dnd:871375845594378240>`, true)}
                const antiraid = new db.crearDB('antiraid', 'antiraid');
                if(antiraid.tiene(message.guild.id)){embed.addField('👮 | AntiRaid', `Habilitado: <:online:871375812417429514>`, true)}else{embed.addField('👮 | AntiRaid', `Desabilitado: <:dnd:871375845594378240>`, true)}
                embed.setColor('#5f6df0')
                msg.delete()
                message.channel.send(embed)
            }, 2000)
        })
}
}
