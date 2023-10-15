module.exports = {
    name: 'uptime', // Name of the prefix command
    description: 'Check the bot\'s current uptime.', // Description of the prefix command
    run: async(client, message) => {
      const uptime = process.uptime(); // Get the uptime in seconds
  
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
  
      const formattedUptime = `${hours}h ${minutes}m ${seconds}s`;
  
      await message.reply(`Bot Uptime: ${formattedUptime}`);
    },
  };
  