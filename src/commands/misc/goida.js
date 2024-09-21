//const { joinVoiceChannel, createAudioPlayer } = require('@discordjs/voice');
//const goidaMp3 = createAudioResource('~/Discord/zovbot/src/assets/music/goida.mp3');

module.exports = {
    name: 'goida',
    description: 'Гойда, братья!',
    deleted: true,

    callback: (client, interaction) => {
        // const player = createAudioPlayer();
        // const connection = joinVoiceChannel({
        //     channelId: interaction.member.voice.channel.id,
        //     guildId: interaction.guild.id,
        //     adapterCreator: interaction.guild.voiceAdapterCreator
        // });

        // player.stop();
        // interaction.reply({
        //     content: 'ГОЙДА!',
        //     files: [
        //         'src/assets/gif/goida.gif'
        //     ]
        // })
    }
}