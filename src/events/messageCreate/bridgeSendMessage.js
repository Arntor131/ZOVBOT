module.exports = async (client, message) => {
    if(message.channel.id === process.env.BRIDGE_CHANNEL_ID) {
        console.log('bridge event', message.author.globalName, message.content);

        if(message.author.bot) return;
        if(message.content.length === 0) return;

        messageText = message.content.replace('@', ''); 
        messageURL = "http://localhost:8888/message/?author=" + message.author.globalName + "&message=" + message.content;
        console.log(messageURL);

        fetch(messageURL)
        .catch((err) => {
            console.log('сообщение не было отправлено');
        });
    }
}