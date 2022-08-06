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
    const response = await API.get(BARBER_URL.URL,HEADER)
    return response.data
}


export async function createBarber(first_name,last_name,store_id)
{
    const data={first_name,last_name,store_id}
    const response = await API.post(BARBER_URL.URL,data,HEADER)
    return response.data
 }



