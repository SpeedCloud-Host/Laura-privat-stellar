/*
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜🟪⬜⬜⬜🟪🟪🟪🟪⬜🟪⬜⬜🟪⬜🟪🟪🟪🟪⬜🟪🟪🟪🟪
⬜🟪⬜⬜⬜🟪⬜⬜🟪⬜🟪⬜⬜🟪⬜🟪⬜⬜🟪⬜🟪⬜⬜🟪
⬜🟪⬜⬜⬜🟪🟪🟪🟪⬜🟪⬜⬜🟪⬜🟪🟪🟪🟪⬜🟪🟪🟪🟪
⬜🟪⬜⬜⬜🟪⬜⬜🟪⬜🟪⬜⬜🟪⬜🟪⬜⬜⬜⬜🟪⬜⬜🟪
⬜🟪⬜⬜⬜🟪⬜⬜🟪⬜🟪⬜⬜🟪⬜🟪🟪⬜⬜⬜🟪⬜⬜🟪
⬜🟪⬜⬜⬜🟪⬜⬜🟪⬜🟪⬜⬜🟪⬜🟪⬜🟪⬜⬜🟪⬜⬜🟪
⬜🟪🟪🟪⬜🟪⬜⬜🟪⬜🟪🟪🟪🟪⬜🟪⬜⬜🟪⬜🟪⬜⬜🟪
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
//=================================== \\
Copyright Pedrozz_Mods.

A Laura foi criada em 15/03/2022.
Ela foi desenvolvida para trazer diversão e segurança ao seu grupo.
A venda deste bot é proibida. Caso você venda ou revenda este produto, perderá seu suporte no bot, entre outros serviços...
// =================================== 
*/

//MÓDULOS DO "WHISKEYSOCKETS"
const { 
'default': makeWASocket,downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap } = require('@whiskeysockets/baileys'); 

//MÓDULOS DO BOT
const { Boom }= require('@hapi/boom');
const AssemblyAI = require("assemblyai");
const axios = require('axios');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const crypto = require('crypto');
const util = require('util');
const PhoneNumber = require('awesome-phonenumber');
const { randomBytes } = require("crypto");
const P = require('pino');
const NodeCache = require("node-cache");
const linkfy = require('linkifyjs');
const request = require('request');
const ms = require('ms');
const os = require('os');
const speed = require('performance-now');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const qrterminal = require('qrcode-terminal');
const { exec, spawn, execSync } = require('child_process');
const moment = require('moment-timezone');
const colors = require("colors");
const yts = require('yt-search');
const infoSystem = require('os')
const cfonts = require('cfonts');
const chalk = require('chalk')
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
var { visualizarmsg, dono1, dono2, dono3, dono4, dono5, dono6, emoji, donoName, numeroDono, botName, prefix, nomeservidor, linkp, botao, DARK_APIKEY, DARK_USERNAME, botVersion, botoff, isBand, isSelinPh} = require("./dono/config.json");
var { fotomenu, fotoadm, fotovip, fotojogo, menu18, fotodono } = require("./laura/json/logos.json");

//HORA E DATA
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
const data1 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

//CONST E FUNÇÕES DO BOT
const { upload, webp_mp4, uploadStars} = require('./laura/js/functions.js');
const { sendVideoAsSticker, sendImageAsSticker } = require('./laura/js/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./laura/js/sticker/rename2.js');
const { arcloud } = require('./laura/js/arcc.js') 
const { addLimit, getLimit } = require('./laura/js/limit.js');
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./laura/js/banned.js");
const { validmove, setGame } = require('./laura/js/tictactoe');
const { palavrasANA, quizanimais, enigmaArchive, garticArchives, whatMusicAr } = require('./laura/js/jogos.js');
const { isFiltered, addFilter } = require('./laura/js/functions.js');
const rg_aluguel = JSON.parse(fs.readFileSync("./laura/json/rg_aluguel.json"));
const countMessage = JSON.parse(fs.readFileSync('./laura/json/countmsg.json'));
const { insert, response } = require('./laura/js/simi.js');
const { randomCantadas } = require('./laura/js/cantadas.js');
const config = JSON.parse(fs.readFileSync('./dono/config.json'));
const { bannerName } = require('./dono/config.json')
const black_ = JSON.parse(fs.readFileSync("./laura/grupos/avisos.json"));
const level2 = JSON.parse(fs.readFileSync("./laura/json/leveling.json"));
const { fatos } = require('./laura/js/fatos.js');
const { palavrasc } = require('./laura/js/conselhos.js');
const { getMinesPositions, MinesHelp } = require('./laura/js/mines.js')
const mines = JSON.parse(fs.readFileSync('./laura/grupos/games/mines.json')) 


//DELETA ARQUIVOS
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

//DIA E MESSES 
var date1 = new Date();
var bulan1 = date1.getMonth();
var hari = date1.getDay();
switch(hari) {
case 0: hari = 'Domigo'; break;
case 1: hari = 'Segunda-feira'; break;
case 2: hari = 'terça-feira'; break;
case 3: hari = 'quarta-feira'; break;
case 4: hari = 'quinta-feira'; break;
case 5: hari = 'sexta-feira'; break;
case 6: hari = 'sábado'; break;
}
switch(bulan1) {
case 0: bulan1 = 'Janeiro'; break;
case 1: bulan1 = 'fevereiro'; break;
case 2: bulan1 = 'Março'; break;
case 3: bulan1 = 'abril'; break;
case 4: bulan1 = 'Maio'; break;
case 5: bulan1 = 'Junho'; break;
case 6: bulan1 = 'julho'; break;
case 7: bulan1 = 'agosto'; break;
case 8: bulan1 = 'setembro'; break;
case 9: bulan1 = 'Outubro'; break;
case 10: bulan1 = 'novembro'; break;
case 11: bulan1 = 'dezembro'; break;
}

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

// Transformar segundos em hora/minutos
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} horas, ${pad(minutes)} minutos e ${pad(seconds)} segundos.`;
}

// FUNÇÃO DO BAILEYS PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO..
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

//FAZER UM DELAY NAS MENSAGENS ETC..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

//ENVIAR FIGURINHA EM URL
const enviarfiguUrl = async (laura, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
laura.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

//ENQUETE DO BOT
const sendPoll = (laura, id, name = '', values = [], selectableCount = 1) => { 
return laura.sendMessage(id, {poll: {name, values, selectableCount}, messageContextInfo: { messageSecret: randomBytes(32)}}, {id, options: {userJid: laura?.user?.id}}).catch(() => {
return console.log(console.error);
});
}

//REINICIA O QR-CODE PARA DIMINUIR PESO
const RSM_FUNC = async(laura, nmrdn_dono2, hora120, upsert) => {
switch(hora120) {
case '07:00:00': case '12:00:00': case '18:00:00': case '00:00:00':
exec("cdlaura/qr-code && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("./laura.js");
delete require.cache[file];
require(file);
}, 1200);
console.log(colors.blue("Reiniciando para diminuir o peso do qrcode.."))
break;
}
if(upsert?.messages == undefined) return
if(JSON.stringify(rg_aluguel).includes(upsert?.messages[0]?.key?.remoteJid)) {
dat_rg = moment.tz('America/Sao_Paulo').format('DD/MM');
for (var i of rg_aluguel) {
var rg_alg_ofc = i;
}


//ALUGUEL DO BOT
if(dat_rg == rg_alg_ofc.data.split("/")[0]-1+"/"+rg_alg_ofc.data.split("/")[1]) {
rg_alg_ofc.cobrou = false;
fs.writeFileSync("./laura/json/rg_aluguel.json", JSON.stringify(rg_aluguel));
}

if(dat_rg >= rg_alg_ofc.data) {
if(rg_alg_ofc.cobrou == false) {
txt = `Olá proprietário vim avisar que o grupo: ${rg_alg_ofc.nome_do_gp} encerrou o aluguel hoje, corre logo pra cobrar o indivíduo, texto detalhando sobre o dono: ${rg_alg_ofc.texto}`;
horadd = parseInt(dat_rg.split("/")[1])+1;
laura.sendMessage(nmrdn_dono2, {text: txt});
rg_alg_ofc.cobrou = true;
rg_alg_ofc.data = parseInt(rg_alg_ofc.data.split("/")[0])+"/"+horadd;
fs.writeFileSync("./laura/json/rg_aluguel.json", JSON.stringify(rg_aluguel))
}}}}


//SIMSIMI
const simih = async (text) => {
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+text+"&lc=pt"})
return datasimi.message
} catch (e){
return
}}

//PARA O PING
//INFORMAÇÕES ADICIONAIS DO SISTEMA
const cpuUsage = (os.loadavg()[0]).toFixed(2);
const totalThreads = os.cpus().length;
const totalMemory = (os.totalmem() / Math.pow(1024, 3)).toFixed(2);
const freeMemory = (os.freemem() / Math.pow(1024, 3)).toFixed(2);
const nodeVersion = process.version;
const platform = os.platform();
const hostname = os.hostname();
let HostOuNao;
if (hostname === "localhost") {
HostOuNao = "Termux"
} else {
HostOuNao = "Hospedagem paga"
}

function formatTime(seconds) {
const days = Math.floor(seconds / (3600 * 24));
const hours = Math.floor((seconds % (3600 * 24)) / 3600);
const minutes = Math.floor((seconds % 3600) / 60);
const secs = Math.floor(seconds % 60);
return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

// Uptime do bot
const uptime = process.uptime();

let timestamp = speed();
let latensi = speed() - timestamp;
const velocidadeBot = latensi.toFixed(4);

//========( BANNERS DO BOT QUE APARECEM NO TERMINAL )==========\\

//MENSAGENS DE SAUDAÇÕES POR HORA
if(hora > "00:00:00"){
var timed = '🌆 Boa Madrugada | good morning' 
} 
if(hora > "05:30:00"){
var timed = '🏙️ Bom Dia | good morning' 
}
if(hora > "12:00:00"){
var timed = '🌇 Boa Tarde | good afternoon' 
}
if(hora > "19:00:00"){
var timed = '🌃 Boa Noite | good night' 
}

//CORES DO CONSOLE
var corzinhas = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]

const cor13 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	

//BANNER DO CONSOLE
const banner = cfonts.render(bannerName, {
font: 'tiny',
align: 'center',
colors: ['whiteBright', 'redBright']
});
const banner2 = cfonts.render((`${timed}`), {
font: 'console',
align: "center",
gradient: [`${cor3}`, `${cor4}`]
});
const banner3 = cfonts.render((`©2025 Copyright by Pedrozz_Mods`), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});

//============( CONSOLES )===========\\
//VERDE
const consoleVerde = (texto) => {console.log(chalk.green(texto))}
const consoleVerde2 = (texto, texto2) => {console.log(chalk.black(chalk.bgGreen(texto)), chalk.black(chalk.white(texto2)))}
//VERMELHO
const consoleVermelho = (texto) => {console.log(chalk.red(texto))}
const consoleVermelho2 = (texto, texto2) => {console.log(chalk.black(chalk.bgRed(texto)), chalk.black(chalk.white(texto2)))}
//AMARELO
const consoleAmarelo = (texto) => {console.log(chalk.yellow(texto))}
const consoleAmarelo2 = (texto, texto2) => {console.log(chalk.black(chalk.bgYellow(texto)), chalk.black(chalk.white(texto2)))}
//AZUL
const consoleAzul = (texto) => {console.log(chalk.blue(texto))}
const consoleAzul2 = (texto, texto2) => {console.log(chalk.black(chalk.bgBlue(texto)), chalk.black(chalk.white(texto2)))}
//CONSOLE DE ERRO
const consoleErro = (texto) => {console.log(chalk.black(chalk.bgRed(`[ ERRO ]`)), chalk.black(chalk.white(`Erro: ${texto}`)))}
//CONSOLE DE AVISO
const consoleAviso = (texto) => {console.log(chalk.black(chalk.bgYellow(`[ AVISO ]`)), chalk.black(chalk.white(texto)))}
//CONSOLE DE SUCESSO
const consoleSucesso = (texto) => {console.log(chalk.black(chalk.bgGreen(`[ SUCESSO ]`)), chalk.black(chalk.white(texto)))}
//CONSOLE DE ONLINE 
const consoleOnline = (texto) => {console.log(chalk.black(chalk.bgGreen(`[ ONLINE ]`)), chalk.black(chalk.white(texto))) }
//CONSOLE DE INFORMAÇÕES
const consoleInfo = (texto) => {console.log(chalk.black(chalk.bgBlue(`[ INFO ]`)), chalk.black(chalk.white(texto)))}

var ban1 = [
"Oops! Parece que sua jornada nesse grupo chegou ao fim. Até mais!",
"Tchauzinho! O grupo decidiu seguir sem você, mas sem ressentimentos.",
"Você foi removido(a), mas ainda deixamos um espacinho para boas lembranças.",
"O grupo vai sentir sua falta... ou talvez nem tanto. Adeus!",
"Foi bom enquanto durou, mas chegou a hora de se despedir. Até logo!",
"Você foi banido(a), mas sem rancor! Que siga seu caminho com leveza.",
"Tchau! Que você encontre um novo grupo onde se sinta em casa.",
"O grupo segue em frente, e você também! Boa sorte por aí.",
"Hora de dar tchauzinho! Quem sabe nos encontramos por aí?",
"Infelizmente, sua estadia no grupo acabou. Cuide-se!",
"Você foi banido(a)... mas não se preocupe, seguimos sem dramas!",
"O tempo aqui chegou ao fim. Até algum dia!",
"Sua participação foi encerrada, mas sem ressentimentos. Boa sorte!",
"Um adeus breve e sem mágoas! O grupo seguirá sem você.",
"Fim da linha por aqui! Que encontre outros lugares legais para ficar."
];
const falasban = ban1[Math.floor(Math.random() * ban1.length)] 
msgEspera = [
"Só um segundinho, tá? Estou cuidando de tudo para você!",
"Um momento, por favor! Estou organizando tudo com carinho.",
"Aguarde um instantinho! Estou preparando algo especial só para você.",
"Espere só mais um pouquinho! Estou finalizando tudo com atenção.",
"Um minutinho, por favor! Quero deixar tudo perfeito para você.",
"Só um momento! Ajustando os últimos detalhes para te surpreender.",
"Um instante, por favor! Estou cuidando de cada detalhe com muito carinho.",
"Espera só mais um pouquinho! Estou aqui focada em você.",
"Só um momentinho! Algo especial está quase pronto.",
"Um segundo, por favor! Tudo sendo feito com muito capricho.",
"Um pouquinho de paciência, por favor! Estou organizando tudo para ficar incrível.",
"Só mais um instante! Finalizando os últimos ajustes para você.",
"Aguarde um pouquinho! Estou preparando tudo com muito cuidado.",
"Um momentinho! Quero que tudo fique perfeito para você.",
"Só um instante! Estou cuidando de tudo com muito carinho.",
"Segura um pouquinho, tá? Já estou terminando aqui.",
"Só mais um minutinho! Ajustando cada detalhe com muito cuidado.",
"Só mais um pouquinho de paciência! Falta pouco para ficar pronto.",
"Um instantinho! Algo especial está chegando para você.",
"Não demora nada, tá? Quase tudo pronto para você!"
];
var msgEsperan = msgEspera[Math.floor(Math.random() * msgEspera.length)] 

//mensagens rápidas
msg = {
espere: msgEsperan, 
dono: "Este comando é exclusivo para meus donos queridos! Se você não for o criador, infelizmente não poderá usá-lo.",
grupo: "Este comando só funciona em grupos! Que tal chamar mais gente para conversar?",
privado: "Esse comando só pode ser usado no privado! Me chama lá para a gente conversar.",
premium: `Oi, usuário! Para usar esse comando premium, você precisa ser VIP. Use *${prefix}comprarvip* para garantir o seu acesso!`,
especial: `Oii! Parece que você ainda não é um usuário especial... Mas não se preocupe, é só falar com meu dono, Pedrozz_Mods, que ele resolve rapidinho!`,
adm: "Você precisa ser administrador para usar este comando! Quando tiver essa permissão, volte aqui.",
error: "Ops! Algo deu errado... Já estou avisando meu dono para resolver isso!",
botadm: "Eu preciso ser administrador para executar esse comando! Pode me ajudar com isso?",
floodcmd: `sem flood aqui, tá bom? Aguarde 5 segundos antes de tentar de novo!`,
modob: `O modo brincadeira precisa estar ativado para usar esse comando! Use *${prefix}modobrincadeira 1* para ativar e *${prefix}modobrincadeira 0* para desativar.`,
pvbot: "Você está falando no privado do bot! Tudo bem, só não exagere, ok?",
modonsfw: "Os comandos +18 estão desativados aqui! Peça a um administrador para ativá-los com *modo+18* ou *modonsfw*.",
gpVip: "Este grupo não está classificado como VIP. Para liberar esse comando, fale com o dono e veja se ele pode transformar o grupo em VIP!"
}

PreFoto = {
erro: 'http://a.top4top.io/p_32445hxpk0.jpg'
}
//MENSAGENS RÁPIDAS
const msgApi = {
erro: "Parece que deu erro na sua solicitação.",
paraQ: "Parece que está faltando o parâmetro da solicitação"
}

//CONST PARA OS SELOS
let live;
let imgm;
let vid;
let cttdono;
let doc;
let selo;
let seloMeta;
let seloGpt;
let seloLuzia;
let seloLaura;
let seloCopilot;
let seloNubank;
let seloBb;
let seloItau;
let seloBradesco;
let seloSantander;

//Whatsapp
if (isSelinPh) {
live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
} else {
live = info
}

if (isSelinPh) {
imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
} else {
imgm = info
}

if (isSelinPh) {
vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
} else {
vid = info
}

///normais
if (isSelinPh) {
cttdono = {key : {participant : '556199317165@s.whatsapp.net'},message: {contactMessage:{displayName: `Pedrozz_Mods🍀`}}}
} else {
cttdono = info
}

if (isSelinPh) {
doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}
} else {
doc = info
}

if (isSelinPh) {
selo = {key: {fromMe: false, participant: '0@s.whatsapp.net'}, message: { "extendedTextMessage": {"text": `𝑩𝒐𝒕: 𝐋𝐚𝐮𝐫𝐚 𝐏𝐫𝐢𝐯𝐚𝐭 𝐒𝐭𝐞𝐥𝐥𝐚𝐫 🛸\n𝑴𝒐𝒅𝒆𝒍𝒐: 𝑺𝒕𝒆𝒍𝒍𝒂𝒓\n𝑽𝒆𝒓𝒔𝒂𝒐: 12.0.0`,"title": null,'thumbnailUrl': fotomenu}}}
} else {
selo = info
}


//pedrozz Mods
const seloCriador = {"key": {"participant": "556199317165@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Pedrozz Mods", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Chat GPT;;;\nFN:Pedrozz Mods\nitem1.TEL;waid=556199317165:556199317165\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const selo12 = (texto) => {
return {key: {fromMe: false,participant: '0@s.whatsapp.net'},message: {
extendedTextMessage: {text: `${texto}`,title: null,thumbnailUrl: fotomenu}}};};


const selolojinha = {key: {fromMe: false, participant: '0@s.whatsapp.net'}, message: { "extendedTextMessage": {"text": `[🛒] LOJINHA DO ZÉ [🛒]\nSempre o mais barato🤑`,"title": null,'thumbnailUrl': fotomenu}}}

//AIS
if (isSelinPh) {
seloMeta = {key: {fromMe: false,participant: '13135550002@s.whatsapp.net',},message: {contactMessage: {displayName: 'Meta IA',vcard:
'BEGIN:VCARD\n' + 
'VERSION:3.0\n' +
`FN:Meta IA\n` + 
`ORG:Meta IA;\n` + 
`TEL;type=MSG;type=CELL;type=VOICE;waid=13135550002:+13135550002\n` + 'END:VCARD'},},};
} else {
seloMeta = info
}

if (isSelinPh) {
seloGpt = {"key": {"participant": "18002428478@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Chat GPT", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Chat GPT;;;\nFN:Chat GPT\nitem1.TEL;waid=18002428478:18002428478\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
} else {
seloGpt = info
}

if (isSelinPh) {
seloLuzia = {"key": {"participant": "5511972553036@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "LuzIA", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Chat GPT;;;\nFN:LuzIA\nitem1.TEL;waid=5511972553036:5511972553036\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
} else {
seloLuzia = info
}

if (isSelinPh) {
seloLaura = {"key": {"participant": "556191969269@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Laura AI", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Laura AI;;;\nFN:Laura AI\nitem1.TEL;waid=556191969269:556191969269\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
} else {
seloLaura = info
}

if (isSelinPh) {
seloCopilot = {"key": {"participant": "18772241042@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Microsoft Copilot", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Microsoft Copilot;;;\nFN:Microsoft Copilot\nitem1.TEL;waid=18772241042:18772241042\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
} else {
seloCopilot = info
}

//Bancos
if (isSelinPh) {
seloNubank = {"key": {"participant": "551150390444@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Nubank", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Nubank;;;\nFN:Nubank\nitem1.TEL;waid=551150390444:551150390444\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
} else {
seloNubank = info
}

if (isSelinPh) {
seloBb = {"key": {"participant": "556140040001@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Banco do Brasil", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Banco Do Brasil;;;\nFN:Banco do Brasil\nitem1.TEL;waid=556140040001:556140040001\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
} else {
seloBb = info
}

if (isSelinPh) {
seloItau = {"key": {"participant": "551140044828@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Itaú", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Itaú;;;\nFN:Itaú\nitem1.TEL;waid=551140044828:551140044828\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
} else {
seloItau = info
}

if (isSelinPh) {
seloBradesco = {"key": {"participant": "551133350237@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Bradesco", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Bradesco;;;\nFN:Bradesco\nitem1.TEL;waid=551133350237:551133350237\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
} else {
seloBradesco = info
}

if (isSelinPh) {
seloSantander = {"key": {"participant": "551140043535@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Santander", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Santander;;;\nFN:Santander\nitem1.TEL;waid=551140043535:551140043535\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
} else {
seloSantander = info
}


//EXPORTAÇÃO DAS FUNÇÕES / CONSTS
module.exports = { insert, response, addFilter, isFiltered, rg_aluguel, black_, sendImageAsSticker, sendImageAsSticker2, ANT_LTR_MD_EMJ, banner, banner2, banner3, timed, hora, data, date, data1, time, config, cor13, hari, bulan1, linkfy, sendPoll, webp_mp4, consoleVerde, consoleVerde2, consoleVermelho, consoleVermelho2, consoleAmarelo, consoleAmarelo2, consoleAzul, consoleAzul2, consoleInfo, consoleErro, consoleAviso, consoleOnline, consoleSucesso, falasban, msgEsperan, msg, msgApi, PreFoto, selo, seloCriador, seloMeta, seloGpt, seloLuzia, seloLaura, seloCopilot, seloNubank, seloBb, seloBradesco, seloSantander, seloItau, cttdono, live, imgm, vid, doc, selolojinha, selo12, cpuUsage, totalThreads, totalMemory, freeMemory, nodeVersion, platform, hostname, HostOuNao, formatTime, uptime, velocidadeBot, latensi, timestamp }

//ATUALIZAÇÕES 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Oiiee, você tá mexendo no arquivo do junim, né? 😑\nMas não se preocupa, estou guardando todas as suas alterações direitinho pra você! 😉✨`))
delete require.cache[file]
require(file)
})
