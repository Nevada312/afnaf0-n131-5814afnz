const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'appeal', // Name of the prefix command
  description: 'Sends the appeal application.', // Description of the prefix command
  run: async(client, message)  => {
    const embed = {
      description: 'Want to appeal your in-game ban? Click below.',
      color: '2b2d31',
    };

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setLabel('Appeal your ban')
          .setURL('https://docs.google.com/forms/d/e/1FAIpQLSffaMifrLtDclErfCDKSs2k604F4yviZTf4sCcW-xj-WzfNyg/viewform') 
      );
    message.delete()
    await message.channel.send({ embeds: [embed], components: [row] });
  },
};
