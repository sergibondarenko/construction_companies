import { httpClient } from './http_client';

export class CompaniesService {
  fetchAll() {
    return httpClient.post('/api/v1/companies');
  }

  find({ companyName }) {
    return httpClient.post('/api/v1/companies', { companyName });
  }
}