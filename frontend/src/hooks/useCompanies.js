import { useState } from 'react';
import { CompaniesService } from '../services';
import { errorToString } from '../helpers';

export function useCompanies() {
  const companiesService = new CompaniesService();

  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return { error, isLoading, companies, fetchAllCompanies, fetchCompanies };
}