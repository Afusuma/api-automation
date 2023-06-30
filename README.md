# api-automation
Cypress ali

# Setup
- npm init -y
- npm install cypress --save-dev
- npx cypress open

Endpoint: https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD.

- I use .then() to validations on the response object.
- Verify status 200 - expect(response.status).to.equal(200)
- To count the total number of coins returned in the response, I used the length of the conversion_rates
- And to verify the presence of the 'GBP' currency in the response, I searched if it existed in the body. 

