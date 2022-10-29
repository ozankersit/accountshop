export interface ApiResponse<T> {
    Data: T
    data?: T
    Messages: Array<any>
    Status: number
    'error_api': ApiErrorResponse
  }
  
  export interface ApiErrorResponse {
    'http_status_code': any
    'http_body': any
  }
  