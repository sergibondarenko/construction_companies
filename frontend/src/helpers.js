export function errorToString(error) {
  if (error?.response?.data) {
    return JSON.stringify(error.response.data);
  }
  return error.toString();
}