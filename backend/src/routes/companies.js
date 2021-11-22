const { CompaniesService } = require('../services');

function defineCompanyRoutes({ app }) {
  const companiesService = new CompaniesService();
  
  app.get(
    '/api/v1/companies',
    async (req, res) => {
      const companyName = req.query.companyName;
      const searchFilter = req.query.searchFilter ? req.query.searchFilter.split(',') : [];

      try {
        if (!companyName) {
          res.json(await companiesService.fetchAll({ searchFilter })); 
        } else {
          res.json(await companiesService.find({ companyName, searchFilter }));
        }
      } catch (err) {
        console.error('Fail to fetch companies', err);
        res.status(500).send('Fail to fetch companies');
      }
    }
  );
}

module.exports = { defineCompanyRoutes };
