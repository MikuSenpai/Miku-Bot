let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.DATABASE._data.users[m.sender].lastngepett)
    let _timers = (300000 - __timers)
    let order = global.DATABASE._data.users[m.sender].lastngepett
    let timers = clockString(_timers) 
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let user = global.DATABASE._data.users[m.sender]
    let buttons = [
{buttonId: 'id1', buttonText: {displayText: '.inv'}, type: 1}, 
]
const buttonMessage = {
    contentText: `\n*π΄Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar* _${timers}_ *Untuk bisa melanjutkan Ngepet*\n`,
    footerText: 'Β©byYnz', 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.DATABASE._data.users[m.sender].lastngepett > 300000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 15729)
let rbrb5 = (randomaku5 * 120)


zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`

dimas = `
                       π
                        
                       π―οΈ
π―οΈMenjaga lilin...
`

dimas2 = `
ποΈποΈποΈποΈποΈπ²π²
ποΈπ·ποΈποΈπ²π²π²
β Memasuki Rumah
`

dimas3 = `
ποΈποΈποΈποΈποΈπ²π²
ποΈ    ποΈποΈπ²π²π²
β Mengambil Uang
`

dimas4 = `
                     π
                     
                π΄π―οΈπ΄
                     π΄
β πΈWuih
`

hsl = `
γ Hasil Ngepet *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}* γ
 
 β πΈ Uang = [ ${zero4} ]
 β π  Exp = [ ${zero5} ] 		 
 β π Misi Selesai = +1
β  π₯Total Ngepet Sebelumnya : ${order}
_Β©BY KOCHENG_
`

global.DATABASE._data.users[m.sender].money += rbrb4
global.DATABASE._data.users[m.sender].exp += rbrb5
global.DATABASE._data.users[m.sender].ojek += 1


setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('πMencari rumah.....')
                     }, 0) 
  user.lastngepett = new Date * 1
    } else conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage ,m )
}
handler.help = ['ngepet']
handler.tags = ['rpg']
handler.command = /^(ngepet|babingepet|babijadi|jadibabi)$/i
handler.register = true

module.exports = handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
