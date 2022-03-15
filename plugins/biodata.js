let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*INFORMATION OWNER*

*Name* : Araa
*Age* : 16 th
*Kelas* : 10 SMK
*Status* : Sendiri Gatau Ngapain😌

*MEDIA SOCIAL*

https://instagram.com/itzmelaras_
wa.me/6285759662788 Owner×Bot🗿
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
