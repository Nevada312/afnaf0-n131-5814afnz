const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chainofcommand')
    .setDescription('Sends the chain of commands of the server.'),
  async execute(client, interaction) {

    const embed = new MessageEmbed()
      .setColor("#2b2d31")
      .setDescription("@Director\n@Deputy Director\n@Assistant Director\n@FBRP | Directive\n\n@Management\n@Community Manager\n\n@Internal Affairs\n@IA Director\n\n@Administration\n@Senior Administrator\n@Administrator\n@Junior Administrator\n\n@Moderation\n@Senior Moderator\n@Moderator\n@Junior Moderator\n@Trial Moderator")

    await interaction.reply({ embeds: [embed] });
  }
};
