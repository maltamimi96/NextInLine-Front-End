import API from "../api/axios";

const AVAILABILITY_URL=
{
    URL:"/availabilities",
    URL_ID:"availabilities/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}

export async function getAll(){

    
    
    const response = await API.get(AVAILABILITY_URL.URL,HEADER)
    return response.data

}



