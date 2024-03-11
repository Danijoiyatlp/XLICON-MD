const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923271614035"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'danitlp8062@gmail.com'
global.github = 'https://github.com/danijoiyatlp'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/dani295c/' // add your username
global.sudo = process.env.SUDO || '923271614035' 
global.devs = '923271614035';
global.website = 'https://github.com/Danijoiyatlp' //wa.me/+923271614035
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/97a20dd1fc9b6681771d2.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdoZ3lUTWFGcEU5cDBKTEdNaUlpK09adVVWTDJtSFBaUFZWZ3VLRm4zdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2VyUVFiL1RTRWVuajNpMG1jMEVETzdEVDZITldvSW9lc2JFbVI5dWNsST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRmp0UmRRMXJlNENKaVZpbmtWaTZ5dW1KYzR2SlRpVzN4YkRFUWxYMzFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDeXkrQWhwdU5TWkpUNmg4UklYU29FdUE2d3MrMWFlUk00dU9JTUpnSzFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMcWVGZUQ3aGpudjB2MEJmUFZTUnBHblBQQitaS3hVdm96Rkg5YlZxRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZZUmFWeUd2RUtvVExpTkFTWWYzMGxSd3VVYWhNMTZlbjNrQW1RbXltams9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0lFSnJjb1FPNUFJekRFMWNZMEgrYnpERSs1UEF5Uy9RUGFrQTFhdDZIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDVESnA0VEMvSUVzcHhBcURnenBpQ25OSFRjZlBDYS81VkVsL1FxL0RHWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJrK3l3d2ZKVEZPMmZXbiswL3dGaEE5a3ZZbE5lLy83cTROSURhS2hKbG1xYzQvTC9UZWcrRWE3TWJZZVVXWUd5V25qcDF2TzlnSTFTSkNrUk1uakR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6IjFUQlJkTlhIL2lZQlhrSDlWTjhkSUwwN1ZkVVorWkEzMkhvbkJvT3FLK1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjcxNjE0MDM1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRDQ0VCQzUzQzZFOURENjA4OUFDNDA1MEFBOTFBQjA0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTAxNTU5NjB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkYtY2VFcnlOVFJLYmg0Tk11eUs3dGciLCJwaG9uZUlkIjoiZmRmOWE1MzQtZGY1OC00YWZiLTk3MzEtYjkwMzAzZTk1YzJhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjROWVpEQXBzdFhUQWRYUlJJajh6ZEgwTjFXST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOWEl5VXJTeDg2aEpucnh3Z3dyT0FEdmw4dTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSlg1NFg3WlYiLCJtZSI6eyJpZCI6IjkyMzI3MTYxNDAzNTozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRPWElDIPCfkYkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1ArWXZNWUhFTFBSdTY4R0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRU9NUysvR2E1STd6Z1ZuVnp6VUk5bmwyU0ZWQ1dUTnJXamZaaVpTazRrMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTzVvYThTbm50aS9vaW4wb2djUDhHT0dDMDBrbzgxcWlYOVdOVmhzUlU0Y3ZxNzdaNXozdDBUZzVmZVY4bFZoWDJHU0FteGNFbCtEN1BnNnBhcjN5QWc9PSIsImRldmljZVNpZ25hdHVyZSI6InY1OXN3dlhWSnM3cTlKem5ZUXBzWUxUTEZ2cEVPUWhncXNsWENNMEFsVHdWeUFnMFZJM0p5V3VLckdoZ3pqYjZaZXhxc1BFQnFiYlQxRFhEZms1MUFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjcxNjE0MDM1OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkRqRXZ2eG11U084NEZaMWM4MUNQWjVka2hWUWxremExbzMyWW1VcE9KTiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMDE1NTk1OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOaTIifQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "DANI-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DANI-JOIYA' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true: process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
