const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios');
const cfonts = require('cfonts');
const Crypto = require('crypto');
const chalk = require('chalk');
const exec = require("child_process").exec;
const log = console.debug;
const mimetype = require('mime-types');
const cheerio = require('cheerio');
const { spawn } = require("child_process");
const ff = require('fluent-ffmpeg');
const { JSDOM } = require('jsdom');
const FormData = require('form-data');
const qs = require('qs');
const { fromBuffer } = require('file-type');
const toMs = require('ms');
const request = require('request');
const ffmpeg = require('fluent-ffmpeg');
const moment = require('moment-timezone');
const util = require('util')
let BodyForm = require('form-data')

function upload (midia) {
return new Promise(async (resolve, reject) => {
try {
let { ext } = await fromBuffer(midia);
let form = new FormData();
form.append('file', midia, 'tmp.' + ext);
await fetch('https://telegra.ph/upload', {
method: 'POST',
body: form
})
.then(html => html.json())
.then(post => {
resolve('https://telegra.ph' + post[0].src);
})
.catch(erro => reject(erro));
} catch (erro) {
return console.log(erro);
}
});
}


function convertSticker(base64, author, pack){
 return new Promise((resolve, reject) =>{
axios('https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp', {
method: 'POST',
headers: {
Accept: 'application/json, text/plain, */*',
'Content-Type': 'application/json;charset=utf-8',
'User-Agent': 'axios/0.21.1',
'Content-Length': 151330
},
data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
}).then(({data}) => {
resolve(data.webpBase64);
}).catch(reject);
});
}

async function uppload (buff) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(buff))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}

async function uploadStars(fileBuffer, fileType) {
            const form = new FormData();
            form.append('file', fileBuffer, { filename: `file.${fileType}`, contentType: `application/${fileType}` });

            const response = await fetch('https://dark-api-5lz0.onrender.com/upload/single', {
                method: 'POST',
                body: form,
                headers: form.getHeaders(),
            });

            if (!response.ok) {
                throw new Error('Falha ao enviar o arquivo para o servidor.');
            }

            const data = await response.json();
            if (data && data.fileUrl) {
                return data.fileUrl;
            } else {
                throw new Error('Não foi possível obter o URL do arquivo enviado.');
            }
        }

async function webp_mp4(filee) {    
    return new Promise(async (resolve, reject) => {
        const bodyForm = new FormData();

        let anu = await uppload(filee)
        console.log(util.format(anu.url))
        bodyForm.append('new-image-url', util.format(anu.url));
        bodyForm.append('upload', 'Upload!');

        axios({
            method: 'post',
            url: 'https://ezgif.com/webp-to-mp4',
            data: bodyForm,
               headers: {
                    'Content-Type': `multipart/form-data; boundary=${bodyForm._boundary}`,
                    'Cookie': '_pbjs_userid_consent_data=6683316680106290; connectId={"ttl":86400000,"lastUsed":1708365622652,"lastSynced":1708365622652}; __gads=ID=b734e9cba4301413:T=1708365615:RT=1708365615:S=ALNI_MbJUB1DF14qGutQavSd3eA_zLMFVw; __gpi=UID=00000a0e5809b49d:T=1708365615:RT=1708365615:S=ALNI_MaAGDVdFDZTEpfWkfEm4zIpFyvHzA; __eoi=ID=d2a1d09449eba246:T=1708365615:RT=1708365615:S=AA-AfjY9hvxmgSapnDI6dI3Bsi_t; _cc_id=1d6889febdcde3132da40a14ad2cb8e3; panoramaId_expiry=1708452021343; cto_bidid=LZPLrV9mMjV2Tlh2eFd5cjl6TldnR2IxTnh1UzZRNVpTVGhUYnpjSU9qaDlOZlRRUVhCdG51b0ZxNjJZemVLdEUzT0Z1QWxua09EWEJSeSUyRkdBalpUd0M2VHRhVjU0RzB6SFdqeWhpNkwwQlc0VURFJTNE; cto_bundle=O1ab3l9TYloxR05zcW9KS2hRQTg0blpPTUI1eGR3REhVM1F4QUpmNlVFcyUyRmR6ZVh3MkFwTlpoTEdtNHclMkJCR2tMczBoJTJCaHRUSCUyRlZvbnplamdTSzE5TllMQjJ2em5mT1R4b2tpS2Zub0xZaDklMkZRdkFISGN3JTJCa3NnVzFqT1Y4Z0VOYW9Sc3lsUHZIN2glMkZGY1kyMzNhZG9rJTJGZGN3JTNEJTNE',
                    'Host': 'ezgif.com',
                    'Origin': 'https://ezgif.com',
                    'Referer': 'https://ezgif.com/webp-to-mp4',
                    'Sec-Fetch-Dest': 'document',
                    'Sec-Fetch-Mode': 'navigate',
                    'Sec-Fetch-Site': 'same-origin',
                    'Sec-Fetch-User': '?1',
                    'Sec-GPC': '1',
                    'Upgrade-Insecure-Requests': '1',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
               
               }
        })
        .then(({ data }) => {
            const bodyFormThen = new FormData()
            const $ = cheerio.load(data)
            const file = $('form.ajax-form input[name="file"]').attr('value')
            const convert = 'Convert WebP to MP4!'
            const gotdata = {
                 file: file,
                 convert: convert
            }
            bodyFormThen.append('file', gotdata.file)
            bodyFormThen.append('convert', gotdata.convert)
            axios({
                 method: 'post',
                 url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                 data: bodyFormThen,
                 headers: {
                      'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                 }
            }).then(({ data }) => {
                 const $ = cheerio.load(data)
                 const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                 resolve({
                      status: true,
                      result: result
                 })
            }).catch(reject)
       })
        .catch(reject);
    });
}

const usedCommandRecently = new Set()
const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
usedCommandRecently.add(from)
setTimeout(() => usedCommandRecently.delete(from), 3000)}

module.exports = { upload, uploadStars, convertSticker, isFiltered, addFilter, webp_mp4}
