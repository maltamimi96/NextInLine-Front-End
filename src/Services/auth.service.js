import API from "../api/axios";
const URL = 
{
  LOGIN:'auth/sign_in',
  SIGNUP:'auth/sign_up'

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}


export async function login (data)  {
  const response = await API.post(URL.LOGIN, data,HEADER )
  return response
}

export async function sign_up (data)  {
  const response = await API.post(URL.SIGNUP,data,HEADER)
  return response
}




