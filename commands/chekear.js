const Discord = require('discord.js')
const Premium = require("../commands/UserPremium.js")
const PremiumCode = require("../commands/Premium.js")
const ms = require("ms")
const moment = require("moment")

module.exports = {
name: "premium",
aliases: ["", ""],
category: "",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {
 let Codigo = args[0];
        const usuario = await Premium.findOne({ userId: message.author.id });
        if(usuario) {
            if(!usuario.timestamp) {
                return message.reply("Ya cuentas con premium, valido hasta: `Infinito`")
            } else {
                return message.reply(`Ya cuentas con premium, valido hasta: \`${moment((usuario.ctimestamp + usuario.timestamp)).format("Do/MM/YYYY hh:mm:ss a").replace("º", "")}\``)
            }
        }
        if(!Codigo) {
            return message.reply("No has introducido ningun codigo para canjear")
        } else {
            const codigo = await PremiumCode.findOne({ code: Codigo });
            if(!codigo) {
                return message.reply("Ese codigo no existe o ya fue canjeado")
            }
            if(codigo.redemmed) {
                return message.reply("Ese codigo no existe o ya fue canjeado")
            }
            if(codigo.time === 0) {
                const x0_244 = new Premium({
                    userId: message.author.id
                });
                await x0_244.save();
                codigo.redemmed = true;
                await codigo.save();
                message.reply("Codigo canjeado correctamente, ahora tienes premium hasta: `Infinito`")
            } else {
                if(codigo.time === 2592000000) {
                    const x0_244 = new Premium({
                        userId: message.author.id,
                        timestamp: Date.now(),
                        ctimestamp: ms('30d')
                    });
                    await x0_244.save();
                    codigo.redemmed = true;
                    await codigo.save();
                    console.log()
                    message.reply(`Codigo canjeado correctamente, ahora tienes premium hasta: \`${(moment(ms("30d") + codigo.timestamp)).format("Do/MMMM/YYYY hh:mm:ss a").replace("º", "")}\``)
                }
                if(codigo.time === 31557600000) {
                    const x0_244 = new Premium({
                        userId: message.author.id,
                        timestamp: Date.now(),
                        ctimestamp: ms('1y')
                    });
                    await x0_244.save();
                    codigo.redemmed = true;
                    await codigo.save();
                    console.log()
                    message.reply(`Codigo canjeado correctamente, ahora tienes premium hasta: \`${(moment(ms("1y") + codigo.timestamp)).format("Do/MMMM/YYYY hh:mm:ss a").replace("º", "")}\``)
                }
            }
        }
    }
}
