const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "Indra",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN: Indra\nitem1.TEL;waid=6282228302341:6282228302341\nitem1.X-ABLabel:📍 Creator MikuBOT\nitem2.EMAIL;type=INTERNET:axellxyzz@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3kXpKwL/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | DKI JAKARTA\nitem5.X-ABLabel:──────[ Indra ]──────\nEND:VCARD"
  }, {
    "displayName": "Indra2",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Indra2\nitem1.TEL;waid=6282132536871:6282132536871\nitem1.X-ABLabel:📍 Bot Miku\nitem2.EMAIL;type=INTERNET:axellxyzz@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3kXpKwL/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | KALIMANTAN\nitem5.X-ABLabel:────[ Indra2]────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator)$/i

module.exports = handler
