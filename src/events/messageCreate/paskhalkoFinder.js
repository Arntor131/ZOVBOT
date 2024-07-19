module.exports = (client, message) => {

    if(message.content.includes('14') && message.content.includes('88'))
    {
        message.reply("ПАСХАЛКО!!! \nПАСХАЛКО!!!");
        console.log("ПАСХАЛКО!!!");
        console.log(message);
    }
};