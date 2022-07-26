const Discord = require('discord.js');
const db = require('megadb');

module.exports = async (client, channel) => {
    if(channel.type === 'dm')return;
    const antiraid = new db.crearDB('antiraid', 'antiraid');
    if(antiraid.tiene(channel.guild.id)) {
        const data = new db.crearDB('antiraid', 'antiraid');
        if(!data.tiene(channel.guild.id)) data.establecer(channel.guild.id, 0);
        const dato = await data.obtener(channel.guild.id);
        if(dato == 0) {
            let nombre = channel.name;
            let channelType = channel.type;
            channel.guild.channels.create(`${nombre}`, {reason: `Antiraid activo.`, type: `${channelType}`});
            data.sumar(channel.guild.id, 1);
        }
        setTimeout(() => {
            data.eliminar(channel.guild.id);       
        }, 300);
    }
}