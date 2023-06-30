describe('API Test', () => {
  it('should validate API response for currency exchange rates', () => {
    cy.request('https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD')
      .then((response) => {
        expect(response.status).to.equal(200);

        const currencyCount = Object.keys(response.body.conversion_rates).length;
        cy.log('Total number of currencies:', currencyCount);

        const gbpCurrency = response.body.conversion_rates['GBP'];
        expect(gbpCurrency).to.exist;
        cy.log('Currency GBP:', gbpCurrency);
      });
  });
});
