import API from "../api/axios";

const BOOKING_URL=
{
    URL:"/bookings",
    URL_ID:"booking/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}

export async function getAll(){

    const response = await API.get(BOOKING_URL.URL,HEADER)
    return response.data
}

