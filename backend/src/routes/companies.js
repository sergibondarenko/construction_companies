const comapanies = require('../../data/data.json');

function defineCompanyRoutes({ app }) {
  app.get(
    '/api/v1/companies',
    (req, res) => {
      try {
        res.json(comapanies);
      } catch (err) {
        console.error('Fail to fetch companies', err);
        res.status(500).send('Fail to fetch companies');
      }
    }
  );
}

module.exports = { defineCompanyRoutes };
