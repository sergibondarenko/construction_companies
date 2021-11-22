const companies = require('../../data/data.json');

class CompaniesService {
  fetchAll() {
    return Promise.resolve(companies);
  }

  find({ companyName }) {
    return Promise.resolve(companies.filter((c) => c.name.toLowerCase().includes(companyName)));
  }
}

module.exports = { CompaniesService };