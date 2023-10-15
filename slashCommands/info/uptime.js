const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Check the bot\'s current uptime.'),
  async execute(client, interaction) {
    const uptime = process.uptime(); // Get the uptime in seconds

    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const formattedUptime = `${hours}h ${minutes}m ${seconds}s`;

    await interaction.reply(`Bot Uptime: ${formattedUptime}`);
  },
};
