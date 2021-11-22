const { CompaniesService } = require('../services');

function defineCompanyRoutes({ app }) {
  const companiesService = new CompaniesService();
  
  app.post(
    '/api/v1/companies',
    async (req, res) => {
      const { searchInput } = req.body;

      try {
        if (!searchInput) {
          res.json(await companiesService.fetchAll()); 
        } else {
          res.json(await companiesService.find({ companyName: searchInput }));
        }
      } catch (err) {
        console.error('Fail to fetch companies', err);
        res.status(500).send('Fail to fetch companies');
      }
    }
  );
}

module.exports = { defineCompanyRoutes };
