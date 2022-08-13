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

export async function createBooking(data)
{
    const response = await API.post(BOOKING_URL.URL,data,HEADER)
    return response.data
}

export async function getBooking(id)
{
    const response = await API.post(BOOKING_URL.URL,data,HEADER)
    return response.data
}



