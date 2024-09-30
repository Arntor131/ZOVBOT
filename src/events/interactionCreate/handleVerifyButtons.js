

module.exports = async (client, interaction) => {
    if(!interaction.isButton()) return;

    if(!(interaction.customId === 'sessionConfirmButton' || interaction.customId === 'sessionDeclineButton')) {
        console.log('bruh button');
        return;
    }

    //console.log(interaction.message);
    interaction.message.delete();
    interaction.reply('bruh');
};