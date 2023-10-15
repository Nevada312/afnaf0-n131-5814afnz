const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'mc', // Name of your command
    description: 'Count the number of members & bots in this server.', // Description of your command
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
             .setColor("#2b2d31")
            .addFields([
                {
                    name: "Membercount",
                    value: `${message.guild.memberCount}`,
                    inline: true
                },
                {
                    name: "Boosts",
                    value: `${message.guild.premiumSubscriptionCount}`,
                    inline: true
                }
            ])

        message.channel.send({ embeds: [embed] });
    }
}
