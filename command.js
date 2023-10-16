import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTE1NDY4MzgzNzc3NTg4NDM0OA.Gqi7ZB.zfQneOX5WrO_5zZ016l0XofOUSd8yIfPUBuyB8");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1154683837775884348"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}