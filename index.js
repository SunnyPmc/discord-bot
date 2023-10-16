import { Client, GatewayIntentBits } from 'discord.js';

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

client.login( "MTE1NDY4MzgzNzc3NTg4NDM0OA.Gqi7ZB.zfQneOX5WrO_5zZ016l0XofOUSd8yIfPUBuyB8")