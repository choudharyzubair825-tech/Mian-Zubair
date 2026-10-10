//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : MIAN-ZUBAIR 
// @author : ARAIN
// @telegram : 
// @github : https://github.com/choudharyzubair825-tech/Mian-Zubair.git
// @whatsapp : +923093993352

//----------------------[ MIAN-ZUBAIR ]----------------------//

const fs = require('fs')
const { color } = require('./mian/zubair')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your MIAN-ZUBAIR session id here; must start with MIAN~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'MIAN-ZUBAIR' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '3093993352' 

//--------------------[ ARAIN ]--------------------------//

global.sudo = process.env.ARAIN ? process.env.MIAN.split(',') : ['3093993352', '3093993352'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Mian Zubair' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "MIAN-ZUBAIR" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Arain" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || ""

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> @MIAN ZUBAIR"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©mian-zubair', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ MIAN-ZUBAIR ]----------------------//