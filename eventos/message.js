const Discord = require('discord.js');
const alexa = require('alexa-bot-api');
const chalk = require('chalk');
const {embedColorBlue, ShieldBot } = require('../config.json');
const package = require('../package.json');
const db = require('megadb');
const Myprefix = new db.crearDB('prefix', 'data_guilds');
const maliciosos = new db.crearDB('maliciosos', 'data_ids');
const prohibidos = new db.crearDB('prohibidos', 'data_ids');
const { readdirSync } = require('fs');
const client = new Discord.Client();
const ops = '¿?';
client.comandos = new Discord.Collection();
let solo = ["825789766859358249"];
servers = [];

module.exports = async (client, message) => {
    if(!message.guild)return;
    if(!message.guild.available)return;

    //Ping al bot.
       if(message.content.endsWith('<@!858498657477197834>')) {
                const embed = new Discord.MessageEmbed().setColor('#284df7').setDescription(`<a:c_botdev:851474550692511754> ¡Hola <@${message.author.id}>! Mi prefix en este servidor es \`${prefix}\`.\n
        <a:flecha_FD:851473148935274506>` + '`Hola! Soy ShieldBot, un bot destinado a la proteccion! Este bot tiene diferentes comandos de antiraid, pero el rol del bot tendra que estar arriba del todo,cuando pones un comando de antiraid tienes que poner maximo de numero 10.`' + `\n 
        > <a:advertencia:834814687375392778> **__Prefix__**\n> \`sh!\`\n> 
        > <a:emoji_16:868965518768488488> **__Comandos__**\n>  \`${prefix}config\`\n> 
        > <a:Vtz2_verificado:874405360860004404> **__Pagina web__**\n>  **[Mi Web](https://shieldbot-web.glitch.me/)**\n> 
        > <:emoji_18:868643022399762432> **__Desarrolladores__**\n> **<@!825789766859358249>**\n> 
        > <:links:871375830088036382> **__Enlaces__**\n> **[Top.gg](https://top.gg/bot/858498657477197834)** **//** **[DisBotList](https://disbotlist.xyz/bot/858498657477197834)**`)
                .setImage("https://cdn.discordapp.com/attachments/884935854718595122/889271153410060399/SHIELDBOT.gif")
                message.channel.send(embed);
                return;
    }
}
//Usuarios muteados.
    async function off() {
        const offUser = new db.crearDB('muteados', 'moderador_automatico');
        if(offUser.tiene(message.guild.id)) {
            let off = await offUser.obtener(message.guild.id);
            if(off.includes(message.author.id)) {
                message.delete();
            }
        }
    } off();

let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if (cmd) {
    cmd.execute(client, message, args)
  }

    if (!cmd) {
    if (!cmd) return message.channel.send(`<:dnd:871375845594378240> | \`¡Lastima! Ese comando no existe.\``)
  }