module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "penel"],
  desc: "Gives all bot commands list",
  react: "🌃",
  category: "Core",
  start: async (
    Miku,
    m,
    { prefix, pushName, NSFWstatus, args, commands, text }
  ) => {
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");
      else
        data.push(
          `🍁Command : ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}`
        );
      if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`);
      if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`);
      if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`);
      if (cmd.usage)
        data.push(
          `💡Example : ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );
      var buttonss = [
        {
          buttonId: `${prefix}help`,
          buttonText: { displayText: `help` },
          type: 1,
        },
      ];
      let buth = {
        text: `ℹ️Command Info\n\n${data.join("\n")}`,
        footer: `ƊƋГƘ ѦしẜƋ ⱮƊ`,
        buttons: buttonss,
        headerType: 1,
      };
      return Miku.sendMessage(m.from, buth, { quoted: m });
    } else {
      const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());

      let textHelpMenu = `Hi *${pushName}* මොකෝ වෙන්නේ යිතින්,

I am *ƊƋГƘ ѦしẜƋ ⱮƊ*, a bot developed by *VT™*.

👂 My prefix is: *${prefix}*

⏳Server Uptime: *${uptime()}*

Here's the list of my Commands .\n
           
╭────ꕥඋදව්ꕥ────╮
├
├☘️ʜɪ
├බොට ආයුබෝවන් කියන්න
├☘️ʜᴇʟᴘ
├සියලුම bot විධාන ලැයිස්තුව ලබා දෙයි
├☘️ ᴄᴏᴜᴘʟᴇᴘᴘ
├ගැලපෙන ජෝඩු පැතිකඩ පින්තූරයක් ලබා ගන්න
├☘️ᴏᴡɴᴇʀ
├මෙහි නිර්මාතෘ
├☘️ ꜱᴄʀɪᴘᴛ
├bot ගැන විස්තර දෙයි
├☘️ ꜱᴛᴀʟᴋ
├දී ඇති පරාසයක whatsapp අංකයක් සොයන්න
├☘️ ꜱᴜᴘᴘᴏʀᴛ 
├සහාය කණ්ඩායම් සබැඳිය යවයි
├☘️ʀᴀɴᴋ
├තරාතිරම පෙන්වයි
╰──────────────────╯
╭────ꕥ ඇඩ්මින් විධාන ꕥ────╮
├
├☃️ᴀᴅᴍɪɴꜱ  
├ ✏️ usage:${prefix}admins ඔයාගේ පණිවිඩය
├ ☃️ ᴀɴɴᴏᴜɴᴄᴇ 
├✏️usage:${prefix}announce ඔයාගේ පණිවිඩය
├☃️ ᴀɴᴛɪʟɪɴᴋɢᴄ
├Gropu link දමන අයව අයින් කරනවා
├☃️ʙᴏᴛꜱᴡɪᴛᴄʜ 
├සමූහයක් තුළ බොට් සක්රිය හෝ අක්රිය කරයි
├☃️ ᴄʜᴀɴɢᴇɢᴄɴᴀᴍᴇ 
├ ✏️ usage: ${prefix}setgcname  සමූහය ට අලුත් නමක් දෙන්න
├☃️ ᴄʜᴀᴛʙᴏᴛɢᴄ 
├ AI chat Bot වරයෙකු ලෙස ක්‍රියාත්මක වේ 
├☃️ ᴅᴇʟᴇᴛᴇ
├✏️ usage: පණිවිඩයක් ටැග් කර  *${prefix}Delete* ටයිප් කරන්න
├☃️ᴘʀᴏᴍᴏᴛᴇ 
├ ✏️ usage:  *${prefix}promote*@මිතුරෙකුගේ නොම්බරය  ටැග් කරන්න 
├☃️ᴅᴇᴍᴏᴛᴇ
├✏️ usage:*${prefix}demote*@මිතුරෙකුගේ නොම්බරය  ටැග් කරන්න 
├☃️ɢᴄʟɪɴᴋ
├Gropu ලිංක් එක ගන්න
├☃️ ɢʀᴏᴜᴘ
├ mute unmute සදහා භාවිතා වේ
├☃️ɢʀᴏᴜᴘɪɴꜰᴏ
├කණ්ඩායම් විස්තරය වෙනස් කරන්න භාවිතා වේ
├☃️ʜɪᴅᴇᴛᴀɢ
├@ සඳහනකින් තොරව සියලුම කණ්ඩායම් සාමාජිකයින් ටැග් කරන්න 
├☃️ʟᴇᴀᴠᴇ
├කණ්ඩායමක් හැර යාමට bot ගෙන් ඉල්ලා සිටින්න
├☃️ɴꜱꜰᴡ
├කණ්ඩායමක් තුළ NSFW විධාන සක්රිය හෝ අක්රිය කරන්න
├☃️ ʀᴇᴍᴏᴠᴇ
├කණ්ඩායමෙන් සාමාජිකයෙකු ඉවත් කරන්න
├☃️ʀᴇᴘᴏʀᴛ
├අයිතිකරුට ගැටලුවක් වාර්තා කිරීමට
├☃️ ʀᴇᴠᴏᴋᴇ
├gropu like එක මාරු කරයි
├☃️ꜱᴇᴛɢᴄᴅᴇꜱᴄ
├කණ්ඩායම් විස්තරය වෙනස් කරන්න
├☃️ꜱᴇᴛᴘᴘɢᴄ
├කණ්ඩායම් පැතිකඩ පින්තූරයක් සකසන්න.
├☃️ ᴛᴀɢᴀʟʟ
├සියලුම කණ්ඩායම් සාමාජිකයින් ටැග් කරන්න
├☃️ᴡᴇʟᴄᴏᴍᴇ
├සමූහයක් තුළ පිළිගැනීමේ/ගුඩ්බායි පණිවිඩ සක්‍රිය හෝ අක්‍රිය කරන්න
╰──────────────────╯
╭────ꕥ owner විධාන ꕥ────╮
├
├🎀 ᴀᴅᴅᴍᴏᴅ
├පරිශීලක මොඩ් එකක් සෑදීමට
├🎀 ᴅᴇʟᴇᴛᴇᴍᴏᴅ
├Mod වෙතින් පරිශීලකයෙකු ඉවත් කිරීමට
├🎀 ʙᴀɴ
├සාමාජිකයෙකු තහනම් කරන්න
├🎀 ᴜɴʙᴀɴ
├සාමාජිකයෙකුගේ තහනම ඉවත් කරන්න
├🎀 ʙᴀɴɢᴄ
├කණ්ඩායමක් තහනම් කරන්න
├🎀 ᴜɴʙᴀɴɢᴄ
├කණ්ඩායමක් තහනම ඉවත් කරන්න
├🎀 ʙʟᴏᴄᴋ
├bot ගිණුමෙන් පරිශීලකයෙකු අවහිර කිරීමට
├🎀ᴜɴʙʟᴏᴄᴋ
├bot ගිණුමෙන් පරිශීලකයෙකු අවහිර කිරීම ඉවත් කිරීමට 
├🎀 ʙʀᴏᴀᴅᴄᴀꜱᴛ
├එම බොට් සිටින සියලුම කණ්ඩායම් තුළ පණිවිඩයක් විකාශනය කරන්න
├🎀 ᴍᴏᴅᴇ
├බොට් ක්‍රියාකාරී මාදිලිය පොදු/පෞද්ගලික ලෙස වෙනස් කරන්න
├🎀 ʙᴀɴʟɪꜱᴛ
├සියලුම තහනම් සාමාජිකයින් ලැයිස්තුගත කරන්න"
├🎀 ᴘᴍᴄʜᴀᴛʙᴏᴛ
├සමූහයක් තුළ ස්වයංක්‍රීය පිළිතුරු විශේෂාංගය සබල හෝ අක්‍රිය කරන්න
╰──────────────────╯       
╭────ꕥ බාගත කිරීම්ꕥ────╮
├
├💖ɪɢᴅʟ
├💝instagram වීඩියෝවක් හෝ පින්තූරයක් බාගත කිරීමට
├💖ɪɢᴅʟ2
├💝instagram වීඩියෝවක් බාගත කිරීමට
├💖ᴘʟᴀʏʟɪꜱᴛ
├💝සංගීත ධාවන ලැයිස්තු සාදන්න සහ කළමනාකරණය කරන්න
├💖ᴘʟᴀʏ
├💝youtube එකෙන් සින්දුවක් බාගත කරයි
├💖ʏᴛᴀᴜᴅɪᴏ
├💝YouTube ලින්ක් එකෙන් ගීතයක් mp4 ලෙස බාගත කිරීමට
├💖ʏᴛᴠɪᴅᴇᴏ
├💝YouTube ලින්ක් එකෙන් ගීතයක් mp4 ලෙස බාගත කිරීමට
├💖ʏᴛꜱ
├💝YouTube හි වීඩියෝවක් සෙවීමට
├💖ᴛɪᴋᴛᴏᴋ
├ටික්ටොක් වීඩියෝවක් බාගත කිරීමට
├💖ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
├ ටික්ටොක් ඕඩියෝ එකක් බාගැනීමට
├💖ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ
├ටික්ටොක් වීඩියෝවක් බාගත කිරීමට
├💖ᴛɪᴄᴛᴏᴋᴅᴏᴄ
├ ටික්ටොක් ඕඩියෝවක් ලේඛනයක් ලෙස බාගත කිරීමට
├💖ʏᴛᴅᴏᴄ
├Youtube ශ්‍රව්‍ය ලේඛනයක් ලෙස බාගත කිරීමට
╰──────────────────╯
╭────ꕥ සෙවීම🔎 ꕥ────╮
├
├🔎 ᴀɴɪᴍᴇ
├සජීවිකරණ සෙවුම් ප්‍රතිඵලයක් ලබා ගැනීමට
├🔎ɢɪꜰꜱᴇᴀʀᴄʜ
├ඕනෑම gif සෙවීමට
├🔎 ɢɪᴍᴀɢᴇ
├ගූගල් පින්තූර සෙවුම් ප්‍රතිඵල ලබා ගැනීමට
├🔎ᴘɪɴᴛᴇʀᴇꜱᴛ
├Pinterest පින්තූර සෙවුම් ප්‍රතිඵලය ලබා ගැනීමට
├🔎 ɢɪᴛʜᴜʙ
├github හි පරිශීලක නාමයක් සොයන්න
├🔎ɢᴏᴏɢʟᴇ
├ගූගල් හි යමක් සොයන්න
├🔎 ʟʏʀɪᴄꜱ
├ඕනෑම ගීත පදයක් ලබා ගැනීමට
├🔎ʀɪɴɢᴛᴏɴᴇ
├ඕනෑම නාද රටාවක් සෙවීමට
├🔎 ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ
├ඕනෑම ස්ටිකරයක් සෙවීමට
├🔎ᴡᴇᴀᴛʜᴇʀ
├ඕනෑම ස්ථානයක කාලගුණ දත්ත ලබා ගන්න
├🔎 ʏᴏᴜᴛᴜʙᴇꜱᴇᴀʀᴄʜ
├YouTube හි වීඩියෝවක් සෙවීමට
╰──────────────────╯
╭────ꕥ ස්ටිකර් ꕥ────╮
├
├✍️ᴇᴍᴏᴊɪᴍɪx
├ඉමෝජි දෙකක් ඒකාබද්ධ කර නව රූපයක් ලබා ගැනීමට
├✍️Q / Qᴜᴏᴛᴇ
├උපුටා දැක්වීමට ඕනෑම පෙළක් සෑදීමට
├✍️ꜱᴛɪᴄᴋᴇʀ
├ස්ටිකර් සෑදීමට
├✍️ꜱᴛɪᴄᴋᴇʀᴄʀᴏᴘ
├හතරැස් ප්‍රමාණයේ ස්ටිකරයක් සෑදීමට
├✍️ ꜱᴛᴇᴀʟ
├ස්ටිකරයක් සොරකම් කිරීමට
├✍️ᴛᴏᴀᴜᴅɪᴏ
├හඬ සටහනකින් හෝ වීඩියෝවකින් ශ්‍රව්‍ය ගොනුව ලබා ගැනීමට
├✍️ ᴛᴏᴍᴘ3
├හඬ සටහනකින් හෝ වීඩියෝවකින් .mp3 ගොනුව ලබා ගැනීමට
├✍️ᴛᴏᴍᴘ4
├ස්ටිකරයෙන් වීඩියෝ ලබා ගැනීමට
├✍️ ᴛᴏᴜʀʟ
├image/video/gif වලින් url එකක් හදන්න
╰──────────────────╯

╭────ꕥ Logo Maker ꕥ────╮
├
├・ 🎄 3ᴅᴄʜʀɪꜱᴛᴍᴀꜱ, 3ᴅɴᴇᴏɴ, 
├・ 🎄 3ᴅꜱᴘᴀᴄᴇ, 3ᴅꜱᴛᴏɴᴇ,
├・ 🎄 ʙᴇᴀʀ, ʙʟᴀᴄᴋᴘɪɴᴋ,
├・ 🎄 ʙʟᴏᴏᴅ, ʙᴏᴋᴇʜ, 
├・ 🎄 ᴄᴀɴᴅʏ, ᴄᴀʀʙᴏɴ, 
├・ 🎄 ᴄʜᴏᴄᴏʟᴀᴛᴇ, ᴄʜʀɪꜱᴛᴍᴀꜱ, 
├・ 🎄 ᴄɪʀᴄᴜɪᴛ, ᴄʟᴏᴜᴅ, 
├・ 🎄 ᴅᴇᴇᴘꜱᴇᴀ, ᴅᴇᴍᴏɴ, 
├・ 🎄 ᴅʀᴏᴘᴡᴀᴛᴇʀ, ɢʟɪᴛᴄʜ, 
├・ 🎄 ᴄʟɪᴛᴄʜ2, ɢʟɪᴛᴄʜ3 
├・ 🎄 ɢʀᴀꜰꜰɪᴛɪ, ʜᴏʟʟᴏɢʀᴀᴘʜɪᴄ, 
├・ 🎄 ᴊᴏᴋᴇʀ, ʟɪᴏɴ , ᴍᴀɢᴍᴀ, 
├・ 🎄 ᴍᴀᴛʀɪx, ɴᴇᴏɴ, 
├・ 🎄 ɴᴇᴏɴᴅᴇᴠɪʟ, ɴᴇᴏɴɢʀᴇᴇɴ, 
├・ 🎄 ɴᴇᴏɴʟɪɢʜᴛ, ᴘᴀᴘᴇʀᴄᴜᴛ, 
├・ 🎄 ᴘᴇɴᴄɪʟ, ᴘᴏʀɴʜᴜʙ, 
├・ 🎄 ꜱᴄɪꜰɪ, ꜱᴘᴀʀᴋʟᴇᴄʜʀɪꜱᴛᴍᴀꜱ, 
├・ 🎄 ᴛʜᴜɴᴅᴇʀ, ᴛʜᴜɴᴅᴇʀ2, 
├・ 🎄 ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ, ᴡᴀʟʟ,
├・ 🎄 ᴡᴏʟꜰ
├
╰──────────────────\n\n`;

      if (NSFWstatus == "true") {
        textHelpMenu += `
╭────ꕥ Owner ꕥ────╮
=
├・VT™
├wa.me//94775597507
├wa.me//94763407452
├wa.me//94783745231
╰──────────────────╯\n\n`;
      }

      textHelpMenu += `*🔰  ƊƋГƘ ѦしẜƋ ⱮƊ  🔰*
 _Powered By:_ *Team VT™*

🎀 To use any of these commands type " *${prefix}Command name* ".

🏮 To get Support Group link type " *${prefix}support* ".

🧩 To report any issues to Developer type " *${prefix}report <describe issue>* ".\n`;

      let favSongs = [
        "dandilions",
        "night changes",
        "heat waves",
        "counting stars",
        "just dance",
        "intentions",
        "Someone to you",
        "Cristina perry Hero",
        "Chainsmokers takeaway",
        "Chainsmokers closer",
        "play date",
        "maroon5 memories",
        "Ed Sheeran photograph",
        "Rosa linn snap",
        "until i make you mine",
        "post malone sunflower",
        "A thousand years",
        "mary on a cross",
        "eminem mockingbird",
        "taking to the moon kina",
        "calm down",
        "the chainsmokers",
        "see you again",
        "maroon5 girls like you",
        "passenger let her go",
        "ed sheeran perfect",
        "twenty one pilots stressed out",
        "justin bieber love yourself",
        "linkin park numb",
        "dusk till dawn",
        "coldplay paradise",
        "one direction what makes you beautiful",
        "charlie puth attention",
        "eminem lose yourself",
        "happier",
        "post malone psycho",
        "avicii waiting for love",
        "happeir marshmello",
        "taylor swift blank space",
        "built a bitch",
        "fat rat well meet again",
        "see youe tears",
        "gangstars paradise",
        "nf hope",
        "nf clouds",
        "nf just like you",
        "nf story",
        "nf lost",
        "nf trust",
        "nf the search",
        "nf leave me alone",
        "nf when i grew up",
        "nf no name",
        "nf let you down",
        "nf lie",
        "eminem not afraid",
        "Stay",
        "Good 4 U",
        "Kiss Me More",
        "Levitating",
        "Montero (Call Me By Your Name)",
        "Leave The Door Open",
        "Peaches",
        "Industry Baby",
        "Save Your Tears",
        "drivers license",
        "Blinding Lights",
        "Positions",
        "Don't Start Now",
        "Watermelon Sugar",
        "Therefore I Am",
        "My Ex's Best Friend",
        "Mood",
        "Heat Waves",
        "Fancy Like",
        "Take My Breath",
        "Bad Habits",
        "You Right",
        "Heartbreak Anniversary",
        "deja vu",
        "Shivers",
        "Happier Than Ever",
        "Need To Know",
        "I Don't Wanna Talk (feat. Mariah the Scientist)",
        "Cold Heart",
        "Leave Before You Love Me",
        "Rumors",
        "Waves",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "Famous Friends",
        "Leave The Door Open",
        "Gone",
        "Better Days",
        "Good Days",
        "Love Story (Taylor's Version)",
        "Proud Of You",
        "Off The Grid",
        "Rapstar",
        "Yebba's Heartbreak",
        "In The Bible",
        "Take Me Home Tonight",
        "Streets",
        "I Need You To Hate Me",
        "Blue Jeans",
        "Sweet Dreams",
        "Leave The Door Open",
        "Fancy Like",
        "Need To Know",
        "Kiss Me More",
        "Rapstar",
        "Montero (Call Me By Your Name)",
        "Good 4 U",
        "Stay",
        "Bad Habits",
        "My Ex's Best Friend",
        "Save Your Tears",
        "Levitating",
        "Heartbreak Anniversary",
        "Peaches",
        "Take My Breath",
        "Deja Vu",
        "Good Days",
        "Industry Baby",
        "Blinding Lights",
        "Mood",
        "Don't Go Yet",
        "Astronaut In The Ocean",
        "Therefore I Am",
        "drivers license",
        "Shivers",
        "Leave Before You Love Me",
        "Rumors",
        "Better Days",
        "Friday (feat. Mufasa & Hypeman)",
        "Without You",
        "The Business",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "You Right",
        "Proud Of You",
        "All I Know So Far",
        "Wild Side",
        "Take Me Home Tonight",
        "Breaking Up Was Easy In The 90s",
        "I Wanna Dance With Somebody (Who Loves Me)",
        "In The Bible",
        "Leave The Door Open",
        "Don't Start Now",
        "Savage Love (Laxed - Siren Beat)",
        "Golden",
        "Rasputin",
        "Waves",
        "Blue Jeans",
        "Dancing With The Devil",
        "Happier Than Ever",
        "Bad Guy",
        "Stay",
        "Good 4 U",
        "Levitating",
        "Kiss Me More",
        "Montero (Call Me By Your Name)",
        "Bad Habits",
        "Peaches",
        "Save Your Tears",
        "Industry Baby",
        "Deja Vu",
        "Heartbreak Anniversary",
        "My Ex's Best Friend",
        "Fancy Like",
        "Take My Breath",
        "Mood",
        "Don't Go Yet",
        "Rapstar",
        "Blinding Lights",
        "Shivers",
        "Leave Before You Love Me",
        "Therefore I Am",
        "Good Days",
        "drivers license",
        "You Right",
        "Better Days",
        "Leave The Door Open",
        "All I Know So Far",
        "Wild Side",
        "The Business",
        "Rumors",
        "Astronaut In The Ocean",
        "Breaking Up Was Easy In The 90s",
        "Dancing With The Devil",
        "Happier Than Ever",
        "Without You",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "Golden",
        "Waves",
        "In The Bible",
        "I Wanna Dance With Somebody (Who Loves Me)",
        "Rasputin",
        "Take Me Home Tonight",
        "Bad Guy",
        "Dance Monkey",
        "Watermelon Sugar",
        "Don't Start Now",
        "Savage Love (Laxed - Siren Beat)",
        "I Don't Wanna Live Forever",
        "Levitating (feat. DaBaby)",
        "Good 4 U",
        "Levitating",
        "Kiss Me More",
        "Montero (Call Me By Your Name)",
        "Bad Habits",
        "Peaches",
        "Save Your Tears",
        "Industry Baby",
        "Deja Vu",
        "Heartbreak Anniversary",
        "My Ex's Best Friend",
        "Fancy Like",
        "Take My Breath",
        "Mood",
        "Don't Go Yet",
        "Rapstar",
        "Blinding Lights",
        "Shivers",
        "Leave Before You Love Me",
        "Therefore I Am",
        "Good Days",
        "drivers license",
        "You Right",
        "Better Days",
        "Leave The Door Open",
        "All I Know So Far",
        "Wild Side",
        "The Business",
        "Rumors",
        "Astronaut In The Ocean",
        "Breaking Up Was Easy In The 90s",
        "Dancing With The Devil",
        "Happier Than Ever",
        "Without You",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "Golden",
        "Waves",
        "In The Bible",
        "I Wanna Dance With Somebody (Who Loves Me)",
        "Rasputin",
        "Take Me Home Tonight",
        "Bad Guy",
        "Dance Monkey",
        "Watermelon Sugar",
        "Don't Start Now",
        "Savage Love (Laxed - Siren Beat)",
        "I Don't Wanna Live Forever",
        "Levitating (feat. DaBaby)",
        "Shallow",
        "Rolling in the Deep",
        "Someone Like You",
        "Hello",
        "Someone You Loved",
        "All of Me",
        "Thinking Out Loud",
        "Shape of You",
        "The A Team",
        "Photograph",
      ];

      let selectedSong = favSongs[Math.floor(Math.random() * favSongs.length)];

      let buttons = [
        {
          buttonId: `${prefix}owner`,
          buttonText: { displayText: "🧣 Bot Owner 🧣" },
          type: 1,
        },
        {
          buttonId: `${prefix}repo`,
          buttonText: { displayText: "🧩 Source Code 🧩" },
          type: 1,
        },
        {
          buttonId: `${prefix}play ${selectedSong}`,
          buttonText: { displayText: `📅දවසේ සිංදු ☃️` },
          type: 1,
        },
      ];
      let buttonMessage = {
        video: { url: botVideo },
        gifPlayback: true,
        caption: textHelpMenu,
        buttons: buttons,
        footer: `*ƊƋГƘ ѦしẜƋ ⱮƊ*`,
        headerType: 4,
      };

      await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
    }
  },
};
