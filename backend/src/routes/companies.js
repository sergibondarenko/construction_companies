const { CompaniesService } = require('../services');

function defineCompanyRoutes({ app }) {
  const companiesService = new CompaniesService();
  
  app.get(
    '/api/v1/companies',
    async (req, res) => {
      try {
        res.json(await companiesService.fetchAll()); 
      } catch (err) {
        console.error('Fail to fetch companies', err);
        res.status(500).send('Fail to fetch companies');
      }
    }
  );
}

module.exports = { defineCompanyRoutes };
