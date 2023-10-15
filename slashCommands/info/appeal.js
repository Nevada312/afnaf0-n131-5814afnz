const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('appeal') // Name of the slash command
    .setDescription('Sends the appeal application.'), // Description of the slash command
  async execute(client, interaction) {
    const embed = {
      description: 'Want to appeal your in-game ban? Click below.',
      color: '2b2d31',
    };

    const row = {
      type: 1, // Action Row
      components: [
        {
          type: 2, // Button
          style: 5, // Link Button
          label: 'Appeal your ban',
          url: 'https://docs.google.com/forms/d/e/1FAIpQLSffaMifrLtDclErfCDKSs2k604F4yviZTf4sCcW-xj-WzfNyg/viewform',
        },
      ],
    };

    await interaction.reply({embeds: [embed], components: [row] });
  },
};
