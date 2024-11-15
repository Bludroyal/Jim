//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2349030851807";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0R5aU44K1F5MGFwK2Jwb2tpZmVUWFNiRWNNTTVJOWp6ckYzdm5iYS9rcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2ZSUEZ3RnIxRCtQYWltYjJocnZkZThocXk2UkJRbjhvd2VDQzE1NWdoND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrR3lkOEcrQ3RpdTMzYmZjdTRCMm5HWjBOMy9aUGF0Tnd0T3Z2QjYrRTM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIMThFT0JtbkQxOG1iMVcvWUNFY3l1R0pMVTJSa1crTlROR0dSQkVLdHpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJIYVBDMkNCV0p3ejArVUNhSitTZThPbHNHYkZRczVHMTFpbko5UHlkV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBjcnpsVGJsZ244YjBGVHdTVDkxS05pYXBzaGt0bDdlUlU4L1JldUFRM0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0Q5c0x6NmR2Qmk4Z3FRczB6Rmh5aWRBRGt0LzU1ZnlnVDBscGFuTUhGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTRsTE1aRU1JZmhPSng5WFpreVFSa1ZmSHBTRWNJUEJUMVJoMmw5Q3RVWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZwUkFrcnBrYXJQSHJmOUJDSzg1cEI4RzI0WVpuamxXRzByamZaMXZlWHdOOVRVeFVCYkpHOEprbm1QZTg0dzJYcVFIdlhHWS9YN3BHUG9nRVFiK2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJndGlKdEJxTUE1OWc5RldPbW1qSkQ3NERzOUZZT1pjemdIVjBzeFlaa1lnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMzA4NTE4MDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E0MjUyNUI4N0E0NURERkFFNDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTQ5MzAxNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNFV3b3Zkb2lTV3FYbEFqTnpzQ3hKZyIsInBob25lSWQiOiI1Mzc2MDQzNy1iODM0LTRjYzktYmM1Ni1mMTZhNjBmZmQzOTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3owK3pFa2lKRkVIT0p5THZIejVreGp4RmE0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxRQmdkVHlqcTNRV3QwU2ZQdG90MCtMekwyTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4NDlFS0JYQSIsIm1lIjp7ImlkIjoiMjM0OTAzMDg1MTgwNzo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNST3cuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeVRnZEFMRUlUNTBia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuSU9pbkVRdXlyaHhoVlVlM0JtWW95SzgwWEt5WWJMZjduVUorOEVTSDNzPSIsImFjY291bnRTaWduYXR1cmUiOiJsMzkrM3ppc1gxRlVwT3dwMnZGUGRJVTZ2WUxyTHBwL1hUbEFBYS8vUGo4cG5hNG85bFBFc1VQa0ZzTDhqWGpldW9SQ3NsVDhHYWIyOEJ3YmtLL3FnUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidW9ocVBZTWF0MFc1eVZpMmRkMGVOUjlEMWRUMnNRR2tBYnFVd1ZDR0NCYWxKelNla09DOFNzVUMwV3lWeVNFcEx0Z3FyYkY5TVRXNW50ZGNpMGp3aHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDMwODUxODA3OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWnlEb3B4RUxzcTRjWVZWSHR3Wm1LTWl2TkZ5c21HeTMrNTFDZnZCRWg5NyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTQ5MzAwOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBamIifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
