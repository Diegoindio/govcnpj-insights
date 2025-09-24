import { CepService } from '../services';
import Ajv from 'ajv';
import schemaCep from '../utils/schemaCep.json';
import { annotate } from '../support/allureHelper';

const ajv = new Ajv({ allErrors: true });

describe('CEP - BrasilAPI', () => {
  it('200 | contrato válido e <1200ms', () => {
    annotate({
      feature: 'CEP',
      story: 'Consulta válida',
      severity: 'critical',
      tags: ['contract', 'smoke', 'performance']
    });

    const t0 = Date.now();
    CepService.consultar('01311200').then((res) => {
      expect(res.status).to.eq(200);

      // valida contrato
      const validate = ajv.compile(schemaCep);
      const ok = validate(res.body);
      expect(ok, JSON.stringify(validate.errors)).to.be.true;

      expect(res.headers['content-type']).to.include('application/json');
      expect(Date.now() - t0).to.be.lessThan(1200);
    });
  });

  it('200 | CEP com máscara', () => {
    annotate({
      feature: 'CEP',
      story: 'CEP com máscara',
      severity: 'minor',
      tags: ['variant']
    });

    CepService.consultar('01311-200').then((res) => {
      expect(res.status).to.eq(200);

      // também podemos validar contrato aqui
      const validate = ajv.compile(schemaCep);
      expect(validate(res.body)).to.be.true;
    });
  });

  it('404 | CEP inexistente', () => {
    annotate({
      feature: 'CEP',
      story: 'CEP inexistente',
      severity: 'normal',
      tags: ['negative']
    });

    CepService.consultar('00000000').then((res) => {
      expect(res.status).to.eq(404);
      expect(res.body).to.have.property('message');
    });
  });

  it('400/404 | formato inválido', () => {
    annotate({
      feature: 'CEP',
      story: 'Formato inválido',
      severity: 'minor',
      tags: ['negative']
    });

    CepService.consultar('ABC12345').then((res) => {
      expect([400, 404]).to.include(res.status);
    });
  });
});
