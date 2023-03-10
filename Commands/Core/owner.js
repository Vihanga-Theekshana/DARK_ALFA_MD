const { mku } = require("../../Database/dataschema.js");

module.exports = {
  name: "owner",
  desc: "To view the list of current Mods",
  alias: ["modlist", "mods", "mod"],
  category: "Core",
  usage: "owner",
  react: "🏅",
  start: async (Miku, m, { text, prefix }) => {
   

      if (ownerList.length == 0) {
        textM = "*No Mods Added !*";
      }

      for (var i = 0; i < ownerList.length; i++) {
        textM += `\n╭────ꕥ Owner ꕥ────╮
=
├・VT™
├wa.me//94775597507
├wa.me//94763407452
├wa.me//94783745231
╰──────────────────╯`;
      }

      }

      if (modlistString != "" || ownerList.length != 0) {
        textM += `\n\n📛 *Don't Spam them to avoid Blocking !*\n\n🎀 For any help, type *${prefix}support* and ask in group.\n\n*💫 Thanks for using ${botName}. 💫*\n`;
      }

      return Miku.sendMessage(
        m.from,
        { video: { url: botVideo },
        gifPlayback: true,
        caption: textM, 
        mentions: xyz },
        { quoted: m }
      );
    } catch (err) {
      console.log(err);
      return Miku.sendMessage(
        m.from,
        { text: `An internal error occurred while fetching the mod list.` },
        { quoted: m }
      );
    }
  },
};
