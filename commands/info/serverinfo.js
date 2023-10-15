const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'serverinfo', // Name of the prefix command
  description: 'Get information about the server.', // Description of the prefix command
  run: async(client, message) => {
    if (!message.guild) {
      await message.reply("This command can only be used in a server (guild).");
      return;
    }

    const guild = message.guild;

    const serverInfoEmbed = new MessageEmbed()
      .setColor("#2b2d31")
      .setTitle('Server Information')
      .setThumbnail('https://media.discordapp.net/attachments/1138620254268960874/1162810760716627988/4818664c38a4e523738022b99366c6c8_1.png?ex=653d4ae9&is=652ad5e9&hm=25183c9f0ef9cc49e0aba646183168b47e6af4fba9964f77def2d8a2b2078068&=&width=115&height=115')
      .addFields(
        { name: 'Server Name', value: guild.name, inline: false },
        { name: 'Server ID', value: guild.id, inline: false },
        { name: 'Members', value: guild.memberCount.toString(), inline: false }, // Convert memberCount to a string
        { name: 'Boosts', value: guild.premiumSubscriptionCount.toString(), inline: true }, // Display boosts
        { name: 'Creation Date', value: guild.createdAt.toUTCString(), inline: false }
      );

    await message.reply({ embeds: [serverInfoEmbed] });
  },
};
