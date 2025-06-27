//CÓDIGO CRIADO POR PEDROZZ MODDZ VULGO CHAPELEIRO 🎩 

const fs = require('fs');

const rpgFile = "./laura/json/rpg.json"

function registrarUsuario(sender, nome, cargo) {
    let rpgData = carregarDadosRpg();
    rpgData[sender] = {
        nome: nome,
        cargo: cargo,
        vida: 200, // Vida inicial
        ganhou: 0,
        perdeu: 0,
    };
    salvarDadosRpg(rpgData);
}

function recuperarUsuario(sender) {
    let rpgData = carregarDadosRpg();
    return rpgData[sender];
}

function modificarVida(sender, quantidade) {
    let rpgData = carregarDadosRpg();
    if (rpgData[sender]) {
        rpgData[sender].vida = Math.min(rpgData[sender].vida + quantidade, 200); // Garante que a vida não ultrapasse 200
        salvarDadosRpg(rpgData);
    }
}

function registrarBatalha(sender, resultado) {
    let rpgData = carregarDadosRpg();
    if (rpgData[sender]) {
        if (resultado === 'Ganhou') {
            rpgData[sender].ganhou += 1;
        } else if (resultado === 'Perdeu') {
            rpgData[sender].perdeu += 1;
        }
        salvarDadosRpg(rpgData);
    }
}

function carregarDadosRpg() {
    if (fs.existsSync(rpgFile)) {
        return JSON.parse(fs.readFileSync(rpgFile));
    } else {
        return {};
    }
}

function salvarDadosRpg(data) {
    fs.writeFileSync(rpgFile, JSON.stringify(data, null, 2));
}

module.exports = {
    registrarUsuario,
    recuperarUsuario,
    modificarVida,
    registrarBatalha,
};

//ATUALIZAÇÕES 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Eii você ja ta mechendo?😑\nAs Alterações foram salvas - '${__filename}'`)
delete require.cache[file]
require(file)
})