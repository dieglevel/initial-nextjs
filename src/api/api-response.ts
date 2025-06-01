export interface ApiResponse<T> {
  data: T | null;
  message: string;
  statusCode: number;
}
