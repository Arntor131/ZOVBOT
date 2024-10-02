

module.exports = async (client, interaction) => {
    if(!interaction.isButton()) return;

    if(!(interaction.customId === 'sessionConfirmButton' || interaction.customId === 'sessionDeclineButton')) {
        console.log('bruh button');
        return;
    }
    const discordid = interaction.user.id;
    const verifyURL = `http://localhost:3203/confirmsession/?discordid=${discordid}`;
    
    interaction.message.delete();
    interaction.reply('bruh');
};