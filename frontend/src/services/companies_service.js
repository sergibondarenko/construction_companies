import { httpClient } from './http_client';

const SERVER_URL = process.env.REACT_APP_BACKEND_URL;

export function buildURL({ searchFilter, companyName, pathName }) {
  const url = new URL(SERVER_URL + pathName);
  
  if (companyName) {
    url.searchParams.set('companyName', companyName);
  }

  const filter = [];
  for (const [filterName, doFilter] of Object.entries(searchFilter)) {
    if (doFilter) filter.push(filterName); 
  }

  if (filter.length) {
    url.searchParams.set('searchFilter', filter);
  }

  return url.href;
}

export class CompaniesService {
  fetchAll({ searchFilter = {} } = {}) {
    const url = buildURL({ pathName: '/api/v1/companies', searchFilter });
    return httpClient.get(url);
  }

  find({ companyName, searchFilter = {} } = {}) {
    const url = buildURL({ pathName: '/api/v1/companies', searchFilter, companyName });
    return httpClient.get(url);
  }
}