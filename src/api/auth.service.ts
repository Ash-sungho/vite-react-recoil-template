import axiosInstance from "./axios";
import {
  ApiResponse,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
} from "./types";

export const authService = {
  // 로그인
  login: async (data: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
    const response = await axiosInstance.post<ApiResponse<LoginResponse>>(
      "/auth/login",
      data
    );
    return response.data;
  },

  // 로그아웃
  logout: async (): Promise<ApiResponse<void>> => {
    const response =
      await axiosInstance.post<ApiResponse<void>>("/auth/logout");
    return response.data;
  },

  // 토큰 갱신
  refreshToken: async (
    data: RefreshTokenRequest
  ): Promise<ApiResponse<RefreshTokenResponse>> => {
    const response = await axiosInstance.post<
      ApiResponse<RefreshTokenResponse>
    >("/auth/refresh", data);
    return response.data;
  },

  // 현재 사용자 정보 조회
  getCurrentUser: async (): Promise<ApiResponse<LoginResponse["user"]>> => {
    const response =
      await axiosInstance.get<ApiResponse<LoginResponse["user"]>>("/auth/me");
    return response.data;
  },
};
