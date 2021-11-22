import { httpClient } from './http_client';

export class CompaniesService {
  fetchAll() {
    return httpClient.post('/api/v1/companies');
  }

  find({ searchInput }) {
    return httpClient.post('/api/v1/companies', { searchInput });
  }
}