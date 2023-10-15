const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('apply') // Name of the slash command
    .setDescription('Sends the staff application.'), // Description of the slash command
  async execute(client, interaction) {
    const embed = {
      description: 'Want to join our Staff team? Click below and apply!',
      color: '2b2d31',
    };

    const row = {
      type: 1, // Action Row
      components: [
        {
          type: 2, // Button
          style: 5, // Link Button
          label: 'Apply Now',
          url: 'https://docs.google.com/forms/d/e/1FAIpQLSeibqG-2ICO11Um0MaVCoUqvoNHgKCGYQEqkqhUPMYH7bBN0g/viewform', 
        },
      ],
    };

    await interaction.reply({embeds: [embed], components: [row] });
  },
};
