let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `

┌〔 Donasi • Emoney 〕
├ Pulsa : 0857-5966-2798
├ OVO : 0857-5966-2798
├ Dana : 0857-5966-2798
├ Gopay : 0857-5866-2798
└────
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
