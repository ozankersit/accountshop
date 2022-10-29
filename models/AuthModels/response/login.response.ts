export interface LoginResponse {
    accessToken: string;
    tokenType: string;
    refreshToken: string;
    id: string;
    username: string;
    email: string;
    roles: string[];
}