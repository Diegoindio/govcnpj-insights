class CnpjService {
  consultar(cnpj) {
    return cy.request({
      method: 'GET',
      url: `/cnpj/v1/${cnpj}`,
      failOnStatusCode: false, // deixa o teste decidir o assert
      headers: { accept: 'application/json' }
    });
  }
}

export default new CnpjService();