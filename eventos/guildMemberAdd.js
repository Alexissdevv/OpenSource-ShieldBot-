const Discord = require('discord.js');
const db = require('megadb');
const secondcheck = new db.crearDB('antitokens');

if(secureServerTokenRaid.tiene(member.guild.id)) {
      if(secondCheck.tiene(member.guild.id)) {
        await member.ban("Posible Token // Anti-Joins activado para prevenir ataques")
      }
      if(userTokenCheck.tiene(member.guild.id)) {
        if(secondCheck.tiene(message.guild.id)) return;
        secondCheck.establecer(member.guild.id, 0)
        member.guild.owner.send("He activado el sistema antitokens durante 3 minutos debido a que puede que esten intentando atacar su servidor con multiples cuentas.")
        setTimeout( function(){
          secondCheck.eliminar(member.guild.id)
          member.guild.owner.send("He desactivado el sistema antitokens, si vuelven a intentar atacar lo volveré a activar!")
        }, 180000);
      }
      userTokenCheck.establecer(member.guild.id, 0)
      setTimeout( function(){
        userTokenCheck.eliminar(member.guild.id);
      }, 5000);
    } 