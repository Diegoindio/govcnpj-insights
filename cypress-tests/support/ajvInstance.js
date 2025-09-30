import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true, strict: false }); // strict false para respostas variáveis
addFormats(ajv); // habilita email, uri, date-time etc. (se usar no futuro)

export default ajv;