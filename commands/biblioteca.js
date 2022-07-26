const Discord = require('discord.js')
const db = require('megadb')
const embed = new Discord.MessageEmbed().setColor('#5f6df0')

module.exports = {
name: "biblioteca",
aliases: ["", ""],
category: "informacion",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

 let mainprefix = "sh!";

        if(!args.join(' '))return message.channel.send('<a:No:851567079890747392> | `Escribe sh!biblioteca [cmd]`\n\nEjemplo: `sh!biblioteca status`')
        if(args[0] == 'antiraid') {
            embed.setDescription('Este comando nos permite poder detener raids no deseados.');
        }else if(args[0] == 'antibots') {
            embed.setDescription('Este comando nos permite poder detener ataques de un bot raider.');
        }else if(args[0] == 'antijoins') {
            embed.setDescription('Este comando nos permite poder activar para que no se una ningun usuario de discord.');
        }else if(args[0] == 'antilinks') {
            embed.setDescription('Este comando nos permite poder activar y desactivar el sistema de links.');
        }else if(args[0] == 'antitokens') {
            embed.setDescription('Este comando nos permite poder activar para que no se una ninguna cuentas de discord.');
        }else if(args[0] == 'status') {
            embed.setDescription('Al activar este comando te enviara un embed con todas las funciones para activar.')
        }else{
            embed.setDescription(`<:dnd:871375845594378240> | \`Ese comando no existe.\`\n\nEjemplo: \`${mainprefix}biblioteca status\``)
        }
        message.channel.send(embed)
    }
}