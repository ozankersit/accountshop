import { Login } from "../../models/AuthModels/login.model";
import {AxiosResponse} from "axios";
import { LoginResponse } from "../../models/AuthModels/response/login.response";
import { httpService } from "../api";
import { INTERNAL_API_URL } from "../../constans/urls";
import { GetUserModel } from "../../models/AuthModels/get-user.model";



export const loginGetToken = async (data: Login): Promise<AxiosResponse<LoginResponse>> => {
    return httpService.post<LoginResponse>(INTERNAL_API_URL + `auth/login`, data)
}

export const loginRefreshToken = async (data:LoginResponse): Promise<AxiosResponse<LoginResponse>> => {
    return await httpService.post<LoginResponse>(INTERNAL_API_URL + `auth/refreshToken`, {token:data.refreshToken})
}

export const getUser = async (): Promise<AxiosResponse<GetUserModel>> => {
    return await httpService.get<GetUserModel>(INTERNAL_API_URL + `user/me`)
  }