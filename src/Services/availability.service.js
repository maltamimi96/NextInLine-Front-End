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


export async function createQuestion(barber_id,start,end)
{
    const data={barber_id,start,end}
    const response = await API.post(AVAILABILITY_URL.URL,data,HEADER)
    return response.data
 }



