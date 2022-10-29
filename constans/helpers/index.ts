import { httpService } from "../../services/api";
import {NextApiRequest} from "next";

export const isClientSide = () => typeof window !== "undefined"


export const getHeaders = (req:NextApiRequest) => {
  httpService.defaults.headers.common['Authorization'] = req.headers.authorization || ''
  // @ts-ignore
  httpService.defaults.headers.common[`tenantId`] = req.headers.tenantid || ''
}