let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let Patch  = `┌ 「 Rules 」
│ 🛂 Supervision by the ρꪖꪻᥴꫝ
│ ✅ Please comply
│ 
│ Regulations can be at any time
│changed for convenience
└────
1. Please don't spam bot commands🎈
2. Don't send virtex, bug, trojan, etc to bot number
3. Insulting ρꪖꪻᥴꫝ will be picked up directly at their respective homes
4. The bot/owner is not responsible for what the user does to the command bot
5. Don't call / vc to bot numbers
6. EXP/Limit/Level cheats are prohibited
7. If the bot doesn't respond, it means it's off/fixed a bug
8. Please report any bugs via *!report*


 「 Consequences 」
1. If you violate rule number 5 (calling / vc) you will be blocked
2. If you violate the rules number 1, 2, 3 then you can get banned from entire Whatsapp
4. If you violate rule number 3 (insulting) then you will be picked up at your respective homes
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/DEVILSER/DEVILSER/main/Media/Ammu/Ammukutty-407x400.png")).buffer(), devil, '© ꪶ͢ᴅᴇᴠɪʟꜱᴇʀꫂ⁩', 'ᴍᴇɴᴜ', '.? menu', 'ᴏᴡɴᴇʀ', ',owner' )
}
handler.tags = ['main']
handler.help = ['rules']
handler.command = /^(rule)$/i
module.exports = handler
