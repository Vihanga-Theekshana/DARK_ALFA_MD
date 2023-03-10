const moment = require('moment-timezone')

module.exports = {
    name: "report",
    alias: ["issue"],
    desc: "To report an issue to owner",
    cool:3600,
    category: "Group",
    usage: `report <describe issue>`,
    react: "๐",
    start: async (
      Miku,
      m,
      { text, prefix, isBotAdmin, isAdmin, pushName, metadata, args }
    ) => {
        if(!m.isGroup){
            if (!args[0]) return m.reply(`Please provide a message to report Developers !`);
            let userTag = m.sender.split("@")[0];
            let userMess = args.join(" ");
            let userName = pushName;

            try {
                userPfp = await Miku.profilePictureUrl(m.sender, "image");
              } catch (e) {
                userPfp = botImage3;
              }

            let reportMessage = `              *ใ Report Recieved ใ*\n\n*๐ค Reported By:* @${userTag}\n\n*๐ Message:* ${userMess}\n\n*๐ Date:* ${moment().tz('Asia/Colombo').format('DD/MM/YYYY')}\n*โฐ Time:* ${moment().tz('Asia/Colombo').format('hh:mm:ss A')}\n*๐ Character using:* ฦฦะฦ ัฆใแบฦ โฑฎฦ\n\n*๐ Note: This is an automated message, please do not reply to this message to avoid blocking.*`;
            m.reply(`Sending report to main developer...\n\nIf it is a spam you might get *blocked* and *banned*.`);
            
            let devs = [`94763407562@s.whatsapp.net`,`94775597507@s.whatsapp.net`]

            for (let i = 0; i < devs.length; i++) {
              await Miku.sendMessage(devs[i],{image: {url: userPfp}, caption: reportMessage,mentions: [m.sender],});
            }
        }
        else{
            if (!args[0]) return m.reply(`Please provide a message to report Developers !`);
            let userTag = m.sender.split("@")[0];
            let userMess = args.join(" ");
            let userName = pushName;
            let gcName = metadata.subject;

            try {
                ppgc = await Miku.profilePictureUrl(m.from, "image");
              } catch {
                ppgc = botImage3;
              }
              let reportMessage = `              *ใ Report Recieved ใ*\n\n*๐ค Reported By:* @${userTag}\n*๐งฉ Group Name:* ${gcName}\n\n*๐ Message:* ${userMess}\n\n*๐ Date:* ${moment().tz('Asia/Colombo').format('DD/MM/YYYY')}\n*โฐ Time:* ${moment().tz('Asia/Colambo').format('hh:mm:ss A')}\n*๐ Character using:* ฦฦะฦ ัฆใแบฦ โฑฎฦ\n\n*๐ Note: This is an automated message, please do not reply to this message to avoid blocking.*`;
              m.reply(`Sending report to main developer...\n\nIf it is a spam you might get *blocked* and *banned*.`);

              let devs = [`94775597507@s.whatsapp.net`,`94763407452@s.whatsapp.net`,`94761907452@s.whatsapp.net`,`94783745231@s.whatsapp.net`]

              for (let i = 0; i < devs.length; i++) {
                await Miku.sendMessage(devs[i],{image: {url: ppgc}, caption: reportMessage,mentions: [m.sender],});
            }
        }
    }
}