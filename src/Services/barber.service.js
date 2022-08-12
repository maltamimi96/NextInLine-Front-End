import API from "../api/axios";

const BARBER_URL=
{
    URL:"/barbers",
    URL_ID:"barbers/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}

export async function getAll(){
    const params={store_id:1}
    const response = await API.get(BARBER_URL.URL,{params},HEADER)
    return response.data
}


export async function createBarber(data)
{
    const response = await API.post(BARBER_URL.URL,data,HEADER)
    return response.data
}



