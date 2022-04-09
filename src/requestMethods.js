import axios from "axios"
const BASE_URL = "Http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDc2OWY0MmFiZDY3ODNlYmRiMGMxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTM3NDA5NywiZXhwIjoxNjQ5NjMzMjk3fQ.896s3tF3LlGjQz5h3dFHaAJ6Xypw-a5_1YVsRvb__DU"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})