const companies = require('../../data/data.json');

class CompaniesService {
  fetchAll({ searchFilter = [] } = {}) {
    if (searchFilter && searchFilter?.length) {
      return Promise.resolve(companies.filter((c) => searchFilter.includes(c.speciality)));
    }

    return Promise.resolve(companies);
  }

  find({ companyName, searchFilter = [] } = {}) {
    if (searchFilter && searchFilter?.length) {
      return Promise.resolve(
        companies.filter((c) => 
          c.name.toLowerCase().includes(companyName) &&
          searchFilter.includes(c.speciality)
        )
      );
    }

    return Promise.resolve(
      companies.filter((c) => c.name.toLowerCase().includes(companyName))
    );
  }
}

module.exports = { CompaniesService };