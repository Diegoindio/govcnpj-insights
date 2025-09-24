describe('Smoke API - BrasilAPI CNPJ', () => {
  it('retorna 200 para CNPJ válido', () => {
    cy.request('GET', '/cnpj/v1/27865757000102').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('razao_social');
    });
  });
});