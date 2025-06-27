//CÓDIGO CRIADO POR PEDROZZ MODDZ VULGO CHAPELEIRO 🎩 

const fs = require('fs');
const mochila12 = "./laura/json/mochila.json"

function adicionarItemMochila(sender, item) {
    let mochilas = [];
    if (fs.existsSync(mochila12)) {
        mochilas = JSON.parse(fs.readFileSync(mochila12));
    }
    let usuarioMochila = mochilas.find(m => m.Usuario === sender);
    if (usuarioMochila) {
        let itemIndex = usuarioMochila.mochila.findIndex(i => i.nome === item);
        if (itemIndex >= 0) {
            usuarioMochila.mochila[itemIndex].quantidade += 1;
        } else {
            usuarioMochila.mochila.push({ nome: item, quantidade: 1 });
        }
    } else {
        mochilas.push({ Usuario: sender, mochila: [{ nome: item, quantidade: 1 }] });
    }
    fs.writeFileSync(mochila12, JSON.stringify(mochilas, null, 2));
}

function obterMochila(sender) {
    if (!fs.existsSync(mochila12)) return [];
    const mochilas = JSON.parse(fs.readFileSync(mochila12));
    const usuarioMochila = mochilas.find(m => m.Usuario === sender);
    return usuarioMochila ? usuarioMochila.mochila : [];
}

function usarItemMochila(sender, item) {
    if (!fs.existsSync(mochila12)) return false;
    let mochilas = JSON.parse(fs.readFileSync(mochila12));
    let usuarioMochila = mochilas.find(m => m.Usuario === sender);
    if (usuarioMochila) {
        let itemIndex = usuarioMochila.mochila.findIndex(i => i.nome === item);
        if (itemIndex >= 0) {
            if (usuarioMochila.mochila[itemIndex].quantidade > 1) {
                usuarioMochila.mochila[itemIndex].quantidade -= 1;
            } else {
                usuarioMochila.mochila.splice(itemIndex, 1);
            }
            fs.writeFileSync(mochila12, JSON.stringify(mochilas, null, 2));
            return true;
        }
    }
    return false;
}

module.exports = { 
    obterMochila, 
    adicionarItemMochila,
    usarItemMochila 
};

//ATUALIZAÇÕES 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Eii você ja ta mechendo?😑\nAs Alterações foram salvas - '${__filename}'`)
delete require.cache[file]
require(file)
})
