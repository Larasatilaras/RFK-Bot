let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*INFORMATION OWNER*

*Name* : Koko Pangeran
*Age* : 6 th
*Kelas* : 4 SD
*Status* : Sendiri Gatau Ngapain😌

*MEDIA SOCIAL*

https://instagram.com/pangerann21_
wa.me/6287832147584 Owner×Bot🗿
*Facebook* : --
*Youtube* : --

_Oky Arigatoddd_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + namaowner)).buffer(), ext, footer, 'Nomor Owner', '.nowner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
