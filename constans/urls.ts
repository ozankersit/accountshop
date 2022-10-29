import getConfig from "next/config"

const {publicRuntimeConfig} = getConfig()

export const API_URL = publicRuntimeConfig.NEXT_PUBLIC_API_URL
export const INTERNAL_API_URL = 'https://devex-auth.herokuapp.com'