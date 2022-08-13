import API from "../api/axios";

const Hair_URL=
{
    URL:"/hair_styles",
    URL_ID:"hair_styles/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}

export async function getAllHair(){

    const response = await API.get(Hair_URL.URL,HEADER)
    return response.data
}

export async function createBooking(data)
{
    const response = await API.post(Hair_URL.URL,data,HEADER)
    return response.data
}

