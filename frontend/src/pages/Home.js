import React, { useEffect, useState } from 'react';
import { CompaniesService } from '../services';
import { errorToString } from '../helpers';

const DEFAULT_SEARCH_FILTER = {
  plumbing: false,
  excavation: false,
  electrical: false
};

export function Home() {
  const companiesService = new CompaniesService();

  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchFilter, setSearchFilter] = useState(DEFAULT_SEARCH_FILTER);

  async function fetchAllCompanies({ searchFilter }) {
    setIsLoading(true);
    setError(null);

    try {
      const res = await companiesService.fetchAll({ searchFilter });
      console.debug('fetchAllCompanies', res.data);
      setCompanies(res.data);
    } catch (error) {
      console.error('fetchAllCompanies', error);
      setError(errorToString(error));
    }

    setIsLoading(false);
  }

  async function fetchCompanies({ searchInput, searchFilter }) {
    setIsLoading(true);
    setError(null);

    try {
      const res = await companiesService.find({ companyName: searchInput, searchFilter });
      console.debug('fetchCompanies', res.data);
      setCompanies(res.data);
    } catch (error) {
      console.error('fetchCompanies', error);
      setError(errorToString(error));
    }

    setIsLoading(false);
  }

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  function handleSearchFilter(e) {
    const filterName = e.target.id;
    setSearchFilter(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  }

  useEffect(() => {
    fetchAllCompanies({ searchFilter });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchCompanies({ searchInput, searchFilter });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, searchFilter])

  useEffect(() => {
    console.log('searchFilter', searchFilter);
  }, [searchFilter]);

  return (
    <div>
      <h2>List of construction companies</h2>

      {error && <h3 style={{ color: 'red' }}>{error}</h3>}
      {isLoading && <h3>Is loading ...</h3>}

      <input type="text" value={searchInput} onChange={handleSearchInput} />
      <input type="checkbox" id="excavation" name="excavation" onChange={handleSearchFilter} />
      <label for="excavation">Excavation</label>
      <input type="checkbox" id="plumbing" name="plumbing" onChange={handleSearchFilter} />
      <label for="excavation">Plumbing</label>
      <input type="checkbox" id="electrical" name="electrical" onChange={handleSearchFilter} />
      <label for="excavation">Electrical</label>
      
      <CompaniesList data={companies} />
    </div>
  );
}

export function CompaniesList({ data }) {
  return (
    <div>
      {data.map((company, i) => <CompanyCard key={i} data={company} />)}
    </div>
  );
}

export function CompanyCard({ data }) {
  return (
    <div>
      <img src={data.logo} alt="Company logo" />
      <br />
      <p>Name: {data.name}</p>
      <p>City: {data.city}</p>
      <p>Speciality: {data.speciality}</p>
    </div>
  );
}