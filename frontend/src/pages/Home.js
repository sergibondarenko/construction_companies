import React, { useEffect, useState } from 'react';
import { Page } from './Page';
import { useCompanies } from '../hooks';

export function Home() {
  const { error, isLoading, companies, fetchAllCompanies, fetchCompanies } = useCompanies();
  const [searchInput, setSearchInput] = useState('');
  const [searchFilter, setSearchFilter] = useState(DEFAULT_SEARCH_FILTER);

  function handleSearchInput(value) {
    setSearchInput(value);
  }

  function handleSearchFilter(filterName) {
    setSearchFilter((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
  }

  useEffect(() => {
    fetchAllCompanies({ searchFilter });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchCompanies({ searchInput, searchFilter });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, searchFilter])

  return (
    <Page error={error} isLoading={isLoading}>
      <h2>List of construction companies</h2>
      <SearchInput searchInput={searchInput} onSearchFilter={handleSearchFilter} onSearchInput={handleSearchInput} />
      <CompaniesList data={companies} />
    </Page>
  );
}

const DEFAULT_SEARCH_FILTER = {
  plumbing: false,
  excavation: false,
  electrical: false
};

export function SearchInput({ searchInput, onSearchInput, onSearchFilter }) {
  function handleSearchInput(e) {
    onSearchInput(e.target.value);
  }

  function handleSearchFilter(e) {
    const filterName = e.target.id;
    onSearchFilter(filterName);
  }

  return (
    <>
      <input type="text" value={searchInput} onChange={handleSearchInput} />
      <input type="checkbox" id="excavation" name="excavation" onChange={handleSearchFilter} />
      <label for="excavation">Excavation</label>
      <input type="checkbox" id="plumbing" name="plumbing" onChange={handleSearchFilter} />
      <label for="excavation">Plumbing</label>
      <input type="checkbox" id="electrical" name="electrical" onChange={handleSearchFilter} />
      <label for="excavation">Electrical</label>
    </>
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