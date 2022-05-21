let handler = function (m) {
	this.sendContact(m.chat, '6282228302341', 'Owner 赤 MIKU - BOT :)', m)
}

handler.customPrefix = ['🍭Owner 赤 MIKU - BOT'] 
handler.command = new RegExp

module.exports = handler
