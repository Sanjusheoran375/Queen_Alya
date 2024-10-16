//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "919728893187";
global.sudo = process.env.SUDO || "919728893187";
global.owner = process.env.OWNER_NUMBER || "919728893187";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZDbVR6L09WUEhXYUh0THBweGZ4UmtKK1NhN0ptZXVoeUVjTzQyS2JVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzVQbnF4NWtDWTZ4Mk13TDlwNUw5M3BrWHZpeVZJQWVNQmd3MDMxV2hqMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyR3J5MGRFZlVZaExzNkFtdm80TElxSGJjSjlyckZJUkkvY0tXQ3pMbmx3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsZFJFelJzVXp3RHBMTXlkZzZnblhPWmdVYmtuQ2U0UG9lbnRtL3dVTm5VPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktFSkhSQjRvTWJMSEtMempuQnhmbSt0SWlXZk5CTXhMRTg3OGhja0RCMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFsS0VkdUMyM0ZQemszYWhTRXZhZ04xMWpLeTE5UkxYNzhHUG5TeVRYMUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9VaFRUSngwZmhHRm5wRXNOZHAvUmNRVmljR2pkVmJNeHdWakI3RVZIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2JDbEdZejR6S3JiMS9mdmNibzliQ0d2ZjdKNUttOTJGc3N3c3pzYldtQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN0QjBiRlBRNEdIR1dFdXhxclhDaGJiM3V0K1hkSHFtRXFHTjdjVzhhTjhEcURrbGFlemdVSEp5RVBmYTNncTlpOHRraWVrMm9XREZJZElnOVphZUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJUaU9ZT1g5TmsvMHlia1Fkb2FrQnFQdmVPNUlGK25nY0xLbVBXcFVzT2tzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTcyODg5MzE4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMDU3QkQwOUEyRTlEN0U5MTM1REVBREM0OTYwQTFCMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5MDc3MTU5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk3Mjg4OTMxODdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjFBOUJDODA4MkE2RUJDQkMyRDY1NjNCRjUwODE5MTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTA3NzE1OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5NzI4ODkzMTg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMxQjM1RDU0OTU2QjBCOTA1MTVBQkM1RUI2MkY2OEJFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjkwNzcxNjF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxOTcyODg5MzE4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCN0IxRERENTBBMjQwMEY0ODE4QkRBRDk2NTlBRDQ1MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5MDc3MTYxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0cmR2dDQ0Z1RIdXhNRzZiSFhxQy1BIiwicGhvbmVJZCI6IjNiMTg0NmQ1LTM1M2UtNGMwNC1hNzQxLWE0ZmQ3ZjhjN2JmMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrV1F3dU81dkNtZmZxY1VISFFjUjlKNlBqVW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYko4ZkUra2VXa1pobmE5bCsvazVGcHpvVS9rPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdEVDZYVjRXIiwibWUiOnsiaWQiOiI5MTk3Mjg4OTMxODc6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJzYW5qdSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTzdHeS9VRkVKaS92cmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYVJzQU1uanhaQVJkMXVYcHFiYU9tWjBWSEc0RGxuWU9Bak5vK096cG9Waz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNjhYQ05laHlmanZzL3JSMHJDTnVkYkxTUmFUR1NQRWhnYVNzcXVNWEJ6WkV3a0YvQldFOWFvUGtjbkJaaU5LckZieXBZZTVaTktvSXQ4b2dkN3lKRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ilh5UW90cHBBeFRoOXBFMjlRUDNoZ2c3T1lCTTdKanNyRHdvVTcyUThIYitXZ0xFZ1pRdXQ4dWZVZTloS2dnQlBCSnEveUJWQmxBN2drV1VMTHhpSkJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5NzI4ODkzMTg3OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2tiQURKNDhXUUVYZGJsNmFtMmpwbWRGUnh1QTVaMkRnSXphUGpzNmFGWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTA3NzE1NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJb2QifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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
