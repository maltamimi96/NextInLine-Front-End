import API from "../api/axios";

const CLIENTS_URL=
{
    URL:"/clients",
    URL_ID:"clients/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}



export async function getAll(){

    const response = await API.get(CLIENTS_URL.URL,HEADER)
    return response.data
}


export async function createClient(data)
{
    const response = await API.post(CLIENTS_URL.URL,data,HEADER)
    return response.data
}

export async function deleteClient(id)
{
    const response = await API.delete(CLIENTS_URL.URL_ID+id,id,HEADER)
    return response.data
}
export async function updateClient(id,data)
{
    const response = await API.put(CLIENTS_URL.URL_ID+id,data,HEADER)
    return response.data
}


