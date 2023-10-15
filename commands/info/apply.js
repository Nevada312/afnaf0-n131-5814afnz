const { Client, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'apply',
    run: async(Client, message, args) => {
        const embed = new MessageEmbed()
        .setDescription(`Want to join our Staff team? Click below and apply! `)
        .setColor("#2b2d31")

        const button = new MessageButton()
        .setLabel("Apply now")
        .setStyle("LINK") // This sets the button to a link style
        .setURL("https://docs.google.com/forms/d/e/1FAIpQLSeibqG-2ICO11Um0MaVCoUqvoNHgKCGYQEqkqhUPMYH7bBN0g/viewform");

    // Create an action row to contain the button
    const row = new MessageActionRow().addComponents(button);

    message.delete();
    message.channel.send({ embeds: [embed], components: [row] }); // Add the action row to the message
    }
}