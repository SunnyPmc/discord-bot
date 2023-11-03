import { Client, GatewayIntentBits } from 'discord.js';


const dotenv = require('dotenv').config()

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
   message.reply({
    content: "Hi from Bot"
   })
   //console.log(message.content)
})

client.on("interactionCreate", (interaction) => {
    // console.log(interaction)
    interaction.reply("Pong!!")
})

client.login(process.env.GPT_TOKEN)