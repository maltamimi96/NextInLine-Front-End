import API from "../api/axios";

const STORE_URL=
{
    URL:"/stores",
    URL_ID:"stores/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}



export async function getAll(){

    const response = await API.get(STORE_URL.URL,HEADER)
    return response.data
}


export async function createStore(data)
{
    const response = await API.post(STORE_URL.URL,data,HEADER)
    return response.data
}

export async function deleteStore(id)
{
    const response = await API.delete(STORE_URL.URL_ID+id,id,HEADER)
    return response.data
}
export async function updateStore(id,data)
{
    const response = await API.put(STORE_URL.URL_ID+id,data,HEADER)
    return response.data
}

export async function getMyStore(id){
    const response = await API.get(STORE_URL.URL_ID+id,HEADER)
    return response.data
}


