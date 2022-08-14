import API from "../api/axios";

const DOMAIN_URL=
{
    URL:"/domains",
    URL_ID:"domains/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}

export async function getAllDomains(){
    const response = await API.get(DOMAIN_URL.URL,HEADER)
    return response.data
}