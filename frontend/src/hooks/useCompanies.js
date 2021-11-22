import { useState, useMemo, useEffect } from 'react';
import { debounce } from 'lodash';
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

  const debounceFetchCompanies = useMemo(() => {
    return debounce((args) => {
      return fetchCompanies(args);
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      debounceFetchCompanies.cancel();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { error, isLoading, companies, fetchAllCompanies, fetchCompanies, debounceFetchCompanies };
}