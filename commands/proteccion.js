const Discord = require('discord.js')
const db = require('megadb')
const antiraid = new db.crearDB('antiraid', 'antiraid')

module.exports = {
    name: "proteccion",
    aliases: ["", ""],
    category: "Seguridad",
    usage: "embed <text to say>",
    description: "",
    run: async(client, message, args) => {


        const user = message.author

        if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)

message.channel.send('<a:cargando:871375858479271956> | `Recopilando datos del servidor.`').then(msg => {
            setTimeout(() => {

                const embed = new Discord.MessageEmbed()

                


            })
    })
}
}