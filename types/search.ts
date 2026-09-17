export interface SearchParams {
  query?: string;
  type?: string;
  page?: number;
  limit?: number;
}


export interface SearchResult<T> {
  results: T[];
  total: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
  totalPages: number;
}