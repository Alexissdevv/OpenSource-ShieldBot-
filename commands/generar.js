const Discord = require("discord.js")
const Passwords = require("../commands/password.js")
const PremiumCode = require("../commands/Premium.js")
const ms = require("ms");
const moment = require("moment")

module.exports = {
name: "generar",
aliases: ["", ""],
category: "privado",
usage: "embed <text to say>",
description: "",
run: async(client, message, args) => {
        let Cantidad = args[0];
        let TiempoC = args[1];
        let Tiempo;
        let Codigos = [];
        if(message.author.id !== "825789766859358249") {
            return message.reply({ content: `<:dnd:871375845594378240> | \`Ese comando no existe\``, allowedMentions: { repliedUser: false } });
        } else {
            if(!Cantidad) {
                return message.reply({ content: `No mencionaste la cantidad a generar!`, allowedMentions:{ repliedUser: false } });
            }
            if(!TiempoC) {
                Tiempo = 0;
                TiempoC = "Infinito";
            } 
            if(TiempoC.endsWith("m")) {
                Tiempo = 2592000000;
                TiempoC = "1Month";
            }
            if(TiempoC.endsWith("y")) {
                Tiempo = 31557600000;
                TiempoC = "1Year"
            }
            let msgr = await message.channel.send({ content: "Generando codigos..." })
            for(let i = 0; i < Cantidad; i++) {
                const codigo = `${TiempoC}={${Passwords(6)}.-${Passwords(5)}:${Passwords(3)}}`
                Codigos.push(codigo)
                const x_444 = new PremiumCode({
                    code: codigo,
                    time: Tiempo,
                    timestamp: Date.now(),
                    redemmed: false
                });
                await x_444.save();
            }
            const asd = Codigos.map(c => `\n${c}`).join(" ")
            msgr.edit({ content: `\`${asd}\`` })
        }
    }
}