const Discord = require('discord.js');
const db = require('megadb');
const dev = new db.crearDB('dev');
const infoEmbed = new Discord.MessageEmbed().setTitle('<a:flecha_FD:851473148935274506> Información.').setColor('#5f6df0');
const embed = new Discord.MessageEmbed().setColor('#5f6df0');

module.exports = {
    nombre: "sos",
    category: "proteccion",
    alias: ['sos'],
    description: "",
    usage: [],
    run: async (client, message, args) => {

    const user = message.author

  if(blacklist.tiene(user.id)) return message.channel.send("¡No puedes usar comandos estas en la blacklist!")


if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:No:851567079890747392> | \`¡No tienes permisos!\``)
        let dev = d[Math.floor(Math.random() * dev.length)];
        let developer = client.users.cache.get(dev);
        infoEmbed.setDescription('<a:loading:851485315238854776> | `¡Entendido! He avisado a un staff activo (`<@'+dev+'>`)`');
        let invite = await message.guild.channels.cache.filter(m => m.type == "text").random().createInvite();
        if(invite == undefined)return message.channel.send('Error, no he podido crear la invitación de este servidor.');
        developer.send(embed.setDescription(`🆘 | \`S.O.S EN ${message.guild.name} (${message.guild.id})\`\n\n[ÚNETE](${invite})`)).catch(err => infoEmbed.setDescription(err));
        message.channel.send(infoEmbed);
        client.channels.cache.get('875132176335773757');
    }
}