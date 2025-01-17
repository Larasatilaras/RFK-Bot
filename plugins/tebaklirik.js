let fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/RTeam1/database/master/games/tebaklirik.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teli untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebaklirik[id] = [
        await conn.sendButton(m.chat, caption, footer, 'Bantuan', `.teli`,m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebaklirik[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, footer, 'Tebak Lirik', `.tebaklirik`, conn.tebaklirik[id][0])
            delete conn.tebaklirik[id]
        }, timeout)
    ]
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i
handler.premium = true

module.exports = handler
