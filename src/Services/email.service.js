import API from "../api/axios";

const EMAIL_URL=
{
    URL:"/https://api.emailjs.com/api/v1.0/email/send",
    URL_ID:"booking/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}


export async function createBooking(data)
{
    const response = await API.post(EMAIL_URL.URL,data,HEADER)
    return response.data
}