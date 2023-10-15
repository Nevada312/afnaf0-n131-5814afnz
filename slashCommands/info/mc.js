const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('membercount')
    .setDescription('Count the number of members & bots in this server.'),
  async execute(client, interaction) {

    const embed = new MessageEmbed()
      .setColor("#2b2d31")
      .addFields([
        {
          name: "Membercount",
          value: `${interaction.guild.memberCount}`,
          inline: true
        },
        {
          name: "Boosts",
          value: `${interaction.guild.premiumSubscriptionCount}`,
          inline: true
        }
      ]);

    await interaction.reply({ embeds: [embed] });
  }
};
