const fs = require('fs')
const yaml = require("js-yaml");
const { mainprefix } = yaml.load(fs.readFileSync("./config.json"));
const Discord = require('discord.js')
const client = new Discord.Client();
const db = require('quick.db')
const { join } = require('path');
const { readdirSync } = require('fs');
const mdb = require('megadb');
const antibots = new mdb.crearDB(`antibots`);
const antijoins = new mdb.crearDB(`antijoins`);
const antilinks = new mdb.crearDB('antilinks')
const warnentry = new mdb.crearDB(`warnentry`)
const kickmaliciosos = new mdb.crearDB('kickmaliciosos')
const blacklist = new mdb.crearDB(`blacklist`)
const disbut = require("discord-buttons");
const config = require('./config.json')
disbut(client);
client.commands= new Discord.Collection();
client.login(config.TOKEN).then(() => { console.log(`${client.user.tag} se ha conectado`) })

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

 for (const file of commandFiles) {
     const command = require(join(__dirname, "commands", `${file}`));
     client.commands.set(command.name , command);
 }
 
 client.on("message", async message => {
    let prefix = await db.get(`prefix_${message.guild.id}`);
   if(prefix === null) prefix = mainprefix;
       if(message.author.bot) return;
       if(message.channel.type === 'dm') return;
   
       if(message.content.startsWith(prefix)) {
           
      let premiumcheck = db.get(`blacklisted`)

      if(premiumcheck && premiumcheck.find(find => find.kid == message.author.id)) return message.channel.send(`<a:No:851567079890747392>| \`No puedes usar el bot que estás en la lista negra\``);
 
           const args = message.content.slice(prefix.length).trim().split(/ +/);
   
           const command = args.shift().toLowerCase();
   
           if(!client.commands.has(command)) return;
   
   
           try {
               client.commands.get(command).run(client, message, args);
   
           } catch (error){
               console.error(error);
           }
        }
   })

  
client.on("shardReady", async shard => {
    var fecha = new Date();
    client.shardid = new Discord.Collection();
    client.shardid.set('shard', shard+1) 
    function presence(client){
      var status = [`sh!help | v2.3.5`];
  var randomStatus = Math.floor(Math.random()*(status.length));
  client.user.setPresence({
       status: "online",
       activity: {
           name: status[randomStatus],
           type: "PLAYING"
       }
   });
}

presence(client);
  setInterval(function (){
    var status = [`sh!help | v2.3.5`];
  var randomStatus = Math.floor(Math.random()*(status.length));
  client.user.setPresence({
       status: "online",
       activity: {
           name: status[randomStatus],
           type: "PLAYING"
       }
   });
}, 10000);
})

////////////////////////////////////

client.on("guildMemberAdd", async member => {
       if(member.user.bot) {
         const embed = new Discord.MessageEmbed()
         .setTitle(`<a:advertencia:834814687375392778> Nuevo bot detectado`)
         .setDescription(`Hola buenas he detectado una entrada de un posible bot no deseado y eso significa que quieren hacerte daño.\n \`Antibots estaba Habilitado en tu servidor:\` <:online:871375812417429514>`)
         .setColor('#5f6df0')
         .setFooter(`Posible amenaza.`)
         member.guild.owner.send(embed)
       }

  if(kickmaliciosos.tiene(member.guild.id)){
    if(blacklist.tiene(member.id)){
      member.guild.member(member).kick(`Antimaliciosos activado.`)
      member.send(`Has sido expulsado de ${member.guild.name}, razon: Kick-maliciosos activado`)
    }
  }

    if(warnentry.tiene(member.guild.id)){
    if(blacklist.tiene(member.id)){
      member.guild.member(member).kick(`Warn-entry activado.`)
      member.send(`Has sido avisado de ${member.guild.name}, razon: Warn-entry activado`)
    }
  }
  })

////////////////////////////////////

///////////////////////////////////

client.on("message", async message => {

  const anti = new mdb.crearDB('Antiraid', 'Antiraid');
  if (anti.tiene(`${message.guild.id}`)) {
    let ServerAntiRaid = await anti.obtener(`${message.guild.id}`)

    client.on("channelDelete", async channel => {

      const fetchedLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type:'CHANNEL_DELETE',
      });
      const whoLog = fetchedLogs.entries.first();


      if (!whoLog) return;

      const { executor } = whoLog;

      let kid = executor.id


      let badbot = channel.guild.member(`${kid}`)

      if (anti.tiene(channel.guild.id, 0)) {
        if (executor.bot) {
          if (executor.flags.has("VERIFIED_BOT")) {
            return;
          } else {
            badbot.ban(badbot)
          }
        }
      }

    });
  }
});

client.on("guildMemberAdd", async member => {
  if(member.user.bot){
    if(antibots.tiene(member.guild.id)){
      member.guild.member(member).kick(`ShieldBot | Antibots activado`)
    }
  }
  if(antijoins.tiene(member.guild.id)){
    member.guild.member(member).kick(`Shieldbot | Antijoins activado`)
  }

})
  const anti = new mdb.crearDB('antiraid', 'antiraid');
client.on("channelDelete", async channel => {
   channel.guild.fetchAuditLogs().then(logs => { 
  let userE = logs.entries.first().executor
  let userAvatar = logs.entries.first().executor.avatarURL({ dynamic: true });

  if(anti.tiene(channel.guild.id)) {
    channel.guild.member(userE).kick(`Raid.`)
  }
   })
})
client.on(`channelCreate`, async channel => {
   channel.guild.fetchAuditLogs().then(logs => { 
  let userE = logs.entries.first().executor
  let userAvatar = logs.entries.first().executor.avatarURL({ dynamic: true });

  if(anti.tiene(channel.guild.id)){
    channel.delte()
    channel.guild.member(userE).kick(`Raid.`)
  }
   })
})
client.on("roleCreate", async role => {
   role.guild.fetchAuditLogs().then(logs => { 
  let userE = logs.entries.first().executor
  let userAvatar = logs.entries.first().executor.avatarURL({ dynamic: true });

  if(anti.tiene(role.guild.id)){
    role.delete()
    role.guild.member(userE).kick(`Raid.`)
  }
   })
})

client.on("roleDelete", async role => {
   role.guild.fetchAuditLogs().then(logs => { 
  let userE = logs.entries.first().executor
  let userAvatar = logs.entries.first().executor.avatarURL({ dynamic: true });

  if(anti.tiene(role.guild.id)){
    role.guild.member(userE).kick(`Raid.`)
  }
   })
})

client.on('message', async message => {
if(antilinks.tiene(message.guild.id)) {
  if(message.member.hasPermission('MANAGE_MESSAGES')) return;
     if(config.feas.some(word => message.content.toLowerCase().includes(word))) {
    message.delete()
    message.channel.send(`<@${message.author.id}>, no mandes links`)
  }
}
})