// API 응답의 기본 형태
export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  status: number;
}

// 에러 응답의 형태
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// 페이지네이션 응답의 형태
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// 페이지네이션 요청 파라미터
export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}

// 인증 관련 타입
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  token: string;
}
