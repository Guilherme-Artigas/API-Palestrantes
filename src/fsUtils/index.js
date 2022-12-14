const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const caminho = path.resolve(__dirname, '../talker.json');

const leitura = async (jsonFormat) => {
  try {
    const dataJson = await readFile(caminho, 'utf-8');
    if (jsonFormat) return dataJson;
    const dataObj = JSON.parse(dataJson);
    return dataObj;
  } catch (erro) {
    return console.log(`OPS... algo deu errado na leitura do arquivo: ${erro.message}`);
  }
};

const escrita = async (payload) => {
  try {
    await writeFile(caminho, JSON.stringify(payload));
    return console.log('Sucesso na escrita do arquivo');
  } catch (erro) {
    return console.log(`Houve erro na escrita do arquivo: ${erro.message}`);
  }
};

module.exports = {
  leitura,
  escrita,
};
