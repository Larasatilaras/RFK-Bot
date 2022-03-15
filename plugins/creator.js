function handler(m) {
//this.sendContact(m.chat, '0', 'Mark', m)
this.sendContact(m.chat, '6285759662798', AraaChann, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner|creator)$/i

module.exports = handler
