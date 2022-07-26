const Discord = require("discord.js")
const db = require('megadb')
const prefix = new db.crearDB("prefixes")

module.exports = {
name: "setprefix",
aliases: ["", ""],
category: "configuracion",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)

const pref = "sh!"

if(!prefix.tiene(`${message.guild.id}`)){
prefix.establecer(`${message.guild.id}.${pref}`)

var prefixNuevo = args.slice(1).join(" ")
if(!prefixNuevo) {
prefixNuevo = pref

prefix.establecer(`${message.guild.id}.${prefixNuevo}`, `${message.author.id}`)

       }
     }
   }
}