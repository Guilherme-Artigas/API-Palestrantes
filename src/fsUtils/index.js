const { readFile, writeFile } = require('fs').promises;
const crypto = require('crypto');
const path = require('path');

const caminho = path.resolve(__dirname, '../talker.json');

const leitura = async () => {
  try {
    const dataJson = await readFile(caminho, 'utf-8');
    return JSON.parse(dataJson);
  } catch (erro) {
    return console.log(`OPS... algo deu errado na leitura do arquivo: ${erro.message}`);
  }
};

const escrita = async (payload) => {
  try {
    await writeFile(caminho, JSON.stringify(payload, null, 2));
    return console.log('Sucesso na escrita do arquivo');
  } catch (erro) {
    return console.log(`Houve erro na escrita do arquivo: ${erro.message}`);
  }
};

const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = {
  leitura,
  escrita,
  generateToken,
};
