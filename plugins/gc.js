let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `*๐๐ข๐๐ก ๐๐ ๐๐ฅ๐จ๐ฃ ๐ข๐๐๐๐๐๐๐ ๐ฆ๐๐๐ก๐ก ๐๐ข๐ง*\nโโโใ Dแดษด'แด าแดสษขแดแด Dแดษดแดแดษชแดษด ใโโโ`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: '๐ โบ Group ShinnBot', description: "Group Utama Shinnbotz", rowId:".gcbot1"},
        {title: 'โ๏ธ โบ Gruop Otaku Desu.', description: "Group Kedua", rowId:".gcbot2"},
        {title: '๐ง โบ Group Aneh', description: "Gruop Ketiga", rowId:".gcbot3"},
        {title: '๐ โบ Owner', description: "Creator Shinnbotz >ฯ<", rowId:".owner"},
        {title: '๐งฟ โบ Info ShinnBot', description: "Info Shinnbotz >ฯ<", rowId:".info"},
        {title: '๐ฎ โบ Donasi', description: "Donasi Untuk Shinn โงโฝโฆ", rowId:".donasi"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot|grupbot|botgrup)$/i
handler.help = ['gcbot', 'grupbot', 'botgrup']
module.exports = handler
