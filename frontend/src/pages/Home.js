import React, { useEffect, useState } from 'react';
import { CompaniesService } from '../services';
import { errorToString } from '../helpers';

export function Home() {
  const companiesService = new CompaniesService();

  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  async function fetchAllCompanies() {
    setIsLoading(true);
    setError(null);

    try {
      const res = await companiesService.fetchAll();
      console.debug('fetchAllCompanies', res.data);
      setCompanies(res.data);
    } catch (error) {
      console.error('fetchAllCompanies', error);
      setError(errorToString(error));
    }

    setIsLoading(false);
  }

  async function fetchCompanies({ searchInput }) {
    setIsLoading(true);
    setError(null);

    try {
      const res = await companiesService.find({ searchInput });
      console.debug('fetchCompanies', res.data);
      setCompanies(res.data);
    } catch (error) {
      console.error('fetchCompanies', error);
      setError(errorToString(error));
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchAllCompanies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchCompanies({ searchInput });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput])

  return (
    <div>
      <h2>List of construction companies</h2>

      {error && <h3 style={{ color: 'red' }}>error</h3>}
      {isLoading && <h3>Is loading ...</h3>}

      <input type="text" value={searchInput} onChange={handleSearchInput} />
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