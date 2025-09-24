class CepService {
  consultar(cep) {
    return cy.request({
      method: 'GET',
      url: `/cep/v2/${cep}`,
      failOnStatusCode: false, // deixamos o teste decidir o assert
      headers: { accept: 'application/json' }
    });
  }
}

export default new CepService();