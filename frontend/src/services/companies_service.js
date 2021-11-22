import { httpClient } from './http_client';

export function buildURL({ searchFilter, companyName, pathName }) {
  const url = new URL(`http://placeholder/${pathName}`);
  
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

  return url.pathname + url.search;
}

export class CompaniesService {
  fetchAll({ searchFilter = {} } = {}) {
    const url = buildURL({ pathName: 'api/v1/companies', searchFilter });
    return httpClient.get(url);
  }

  find({ companyName, searchFilter = {} } = {}) {
    const url = buildURL({ pathName: 'api/v1/companies', searchFilter, companyName });
    return httpClient.get(url);
  }
}