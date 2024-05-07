const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


//
global.Owner = [""];
global.OwnerNumber = [""]; 
global.ownertag = [""]; 
global.OwnerName = "S Y 4 M";
global.BotName = "@_sks_bot_";
global.packname = "@_sks_bot_";                             //Do not change.
global.author = "Hehehee";                               //Do not change.
global.BotSourceCode = "https://github.com/sksbot7/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/DAMuVjxVMplGoEpaTyINMa"; 


//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["/"];                                    //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Asia, Kolkata";                   
global.reactmoji = "🐦";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://instagram.com/_sks_bot_";
global.lolhuman = "Sy4m";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command',
    grouponly: 'This command is only made for *Groups*,!',
    privateonly: 'This command is only made for *Private Chat*,!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*,!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
