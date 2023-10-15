const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('id')
    .setDescription('Get a user\'s ID.')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('Select the user to get the ID for.')
        .setRequired(false) // Make the option not required
    ),
  async execute(client, interaction) {
    let user = interaction.options.getUser('user');

    // If 'user' option is not provided, use the user who issued the command
    if (!user) {
      user = interaction.user;
    }

    await interaction.reply(`\`${user.id}\``);
  },
};
