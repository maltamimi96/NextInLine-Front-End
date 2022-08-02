import API from "../api/axios";

const STORE_URL=
{
    URL:"/store",
    URL_ID:"store/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}



export async function getAll(){

    const response = await API.get(STORE_URL.URL,HEADER)
    
    return response.data
}