// Uso: assertSchema(ajv, schema, res.body)
export const assertSchema = (ajv, schema, data) => {
  const validate = ajv.compile(schema);
  const ok = validate(data);

  if (!ok) {
    // anexa payload e erros no Allure
    cy.allure().attachment('response.json', JSON.stringify(data, null, 2), 'application/json');
    cy.allure().attachment('ajv-errors.json', JSON.stringify(validate.errors, null, 2), 'application/json');
  }

  expect(ok, JSON.stringify(validate.errors, null, 2)).to.be.true;
};
