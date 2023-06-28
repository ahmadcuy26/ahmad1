const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6285857537269@s.whatsapp.net"]
global.nomerOwner = "6285857537269"
global.nomorOwner = ['6285857537269']
global.namaDeveloper = "Warzz Mang Eak"
global.namaBot = "Warzz Bot Push"
global.packname = ""
global.author = "Sticker By "
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh ZIRO
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/