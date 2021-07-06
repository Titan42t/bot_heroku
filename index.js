require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "§";

client.on('ready', () => {
    console.log('Bot prêt');
});

client.on('message', (message) => {

    if(message.content.toLowerCase() === 'salut'){
        message.channel.send('Salut, ça va ?');
    }

    if(message.content.toLowerCase() === 'bonjour'){
        message.channel.send('Salut à toi');
    }

    if(message.content.toLowerCase() === 'ça va ?' || message.content.toLowerCase() === 'ca va ?'){
        message.channel.send('Ça va ça va imotep, et toi ?');
    }

    if(message.content.toLowerCase() === 'tg' || message.content.toLowerCase() === 'connard' || message.content.toLowerCase() === 'fuck'
    || message.content.toLowerCase() === 'connasse'){
        message.reply('Hey ! Pas de gros mots ici !');
    }

    let mot = message.content.split(" ");
    let command = mot.shift().toLowerCase();

    if (!command.startsWith(prefix)) return;

    switch(command) {
        case prefix + 'stop': //si command === prefix + 'stop'
        message.channel.send('D\'accord je m\'arrête');
        break; //return

        case prefix + 'ban':
        message.channel.send('Je vais te ban');
        break;

        case prefix + 'brouette':
        message.channel.send('Mais bien sûr');
        break;

        default: break;
    }
})

client.on('guildMemberAdd', (member) => {
    let welcomeChannel = client.channels.cache.get('861602939817951253');
    welcomeChannel.send('Bienvenue chez nous <@' + member.id + '> ! :hugging:');

    member.roles.add('861604021223030814');
})

client.on('guildMemberRemove', (member) => {
    let byeChannel = client.channels.cache.get('861602939817951253');
    byeChannel.send('Oh tu nous quittes déjà <@' + member.id + '> :cry:');
})

client.login(process.env.TOKEN);
