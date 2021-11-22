import React, { useEffect, useState } from 'react';
import { Page } from './Page';
import { useCompanies } from '../hooks';

export function Home() {
  const { error, isLoading, companies, fetchAllCompanies, debounceFetchCompanies } = useCompanies();
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
    debounceFetchCompanies({ searchInput, searchFilter });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, searchFilter])

  return (
    <Page error={error} isLoading={isLoading}>
      <h2 className="text-3xl mb-6">List of construction companies</h2>
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

export function SearchInputFilterBox({ id, label, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id={id} name={id} onChange={onChange} />
      <label for={id}>{label}</label>
    </div>
  );
}

export function SearchInput({ searchInput, onSearchInput, onSearchFilter }) {
  function handleSearchInput(e) {
    onSearchInput(e.target.value);
  }

  function handleSearchFilter(e) {
    const filterName = e.target.id;
    onSearchFilter(filterName);
  }

  return (
    <div className="mb-6">
      <div className="mb-2">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInput}
          className="w-full focus:outline-none rounded-l-md h-10 p-2"
        />
      </div>
      <div className="flex items-center gap-4">
        <SearchInputFilterBox id="excavation" label="Excavation" onChange={handleSearchFilter} />
        <SearchInputFilterBox id="plumbing" label="Plumbing" onChange={handleSearchFilter} />
        <SearchInputFilterBox id="electrical" label="Electrical" onChange={handleSearchFilter} />
      </div>
    </div>
  );
}

export function CompaniesList({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((company, i) => <CompanyCard key={i} data={company} />)}
    </div>
  );
}

export function CompanyCard({ data }) {
  return (
    <div className="flex flex-col gap-2 rounded 
    overflow-hidden shadow-lg cursor-pointer transition 
    duration-500 ease-in-out transform hover:-translate-y-1 
    hover:scale-105 hover:shadow-xl bg-white">
      <img src={data.logo} alt="Company logo" className="w-full h-72 object-cover" loading="lazy" />
      <div className="p-4">
        <p>Name: {data.name}</p>
        <p>City: {data.city}</p>
        <p>Speciality: <b>{data.speciality}</b></p>
      </div>
    </div>
  );
}