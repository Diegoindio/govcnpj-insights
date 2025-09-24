import { CnpjService } from '../services';
import Ajv from 'ajv';
import schema from '../utils/schemaCnpj.json';
import { annotate } from '../support/allureHelper';

const ajv = new Ajv({ allErrors: true });

// helper p/ aceitar múltiplos status
const expectOneOf = (status, accepted = []) =>
  expect(accepted, `expected one of ${accepted}, got ${status}`).to.include(status);

describe('CNPJ - BrasilAPI', () => {
  it('200 | contrato válido', () => {
    annotate({ feature: 'CNPJ', story: 'Consulta válida', severity: 'critical', tags: ['contract','smoke'] });

    CnpjService.consultar('27865757000102').then((res) => {
      expect(res.status).to.eq(200);

      const validate = ajv.compile(schema);
      const ok = validate(res.body);
      expect(ok, JSON.stringify(validate.errors)).to.be.true;

      // quando 200 deve ser JSON
      expect(res.headers['content-type']).to.include('application/json');
    });
  });

  it('404/400 | CNPJ numérico inválido (zeros)', () => {
    annotate({ feature: 'CNPJ', story: 'CNPJ numérico inválido', severity: 'normal', tags: ['negative'] });

    CnpjService.consultar('00000000000000').then((res) => {
      expectOneOf(res.status, [404, 400]);
      // algumas origens retornam JSON, outras HTML; por isso não checamos body.message aqui
    });
  });

  it('404/400 | com máscara (formato inválido)', () => {
    annotate({ feature: 'CNPJ', story: 'CNPJ com máscara', severity: 'minor', tags: ['variant','negative'] });

    CnpjService.consultar('27.865.757/0001-02').then((res) => {
      expectOneOf(res.status, [404, 400]);
      // pode vir página HTML (Next 404) -> não validar message
    });
  });

  it('404/400 | formato inválido (tamanho curto)', () => {
    annotate({ feature: 'CNPJ', story: 'Formato inválido (curto)', severity: 'minor', tags: ['negative'] });

    CnpjService.consultar('123').then((res) => {
      expectOneOf(res.status, [404, 400]);
    });
  });
});
