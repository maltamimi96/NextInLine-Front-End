import API from "../api/axios";

const CLIENT_URL=
{
    URL:"/clients",
    URL_ID:"clients/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}

export async function getAll(){
    const response = await API.get(CLIENT_URL.URL,HEADER)
    return response.data
}


export async function createclient(first_name,last_name,store_id)
{
    const data={first_name,last_name,store_id}
    const response = await API.post(CLIENT_URL.URL,data,HEADER)
    return response.data
 }



