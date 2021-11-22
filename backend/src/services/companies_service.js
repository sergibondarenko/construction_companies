const companies = require('../../data/data.json');

class CompaniesService {
  fetchAll() {
    return Promise.resolve(companies);
  }
}

module.exports = { CompaniesService };