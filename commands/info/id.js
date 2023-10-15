module.exports = {
    name: 'id', // Name of the prefix command
    description: 'Get a user\'s ID.', // Description of the prefix command
    run: async(client, message, args) => {
      let user = message.mentions.users.first() || message.author;
  
      const userID = user.id;
      
      await message.reply(`\`${userID}\``);
    },
  };
  