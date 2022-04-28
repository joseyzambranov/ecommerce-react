import axios from "axios"
const BASE_URL = "https://nodejs-ecommerce-api-mongodb.joseyzambranov.repl.co/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDc2OWY0MmFiZDY3ODNlYmRiMGMxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTAxOTQ3MSwiZXhwIjoxNjUxMjc4NjcxfQ.LKqnVIn1N2dDDkn-DiXhYWgfmP79VpEctEaVM9_lnTw" //JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})