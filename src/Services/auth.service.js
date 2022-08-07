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

export async function sign_up (username,email,password,con_pass)  {
  const response = await API.post(URL.SIGNUP,
    JSON.stringify({username,email,password,con_pass}),
    {
        headers: { 'Content-Type': 'application/json' },
        
    }
  )
  return response
}


export async function isLoggedIn()
{
   return sessionStorage.getItem("token")||null 
}

export async function isAdmin()
{
  sessionStorage.getItem("admin")? console.log("yes"):console.log("no")
}


export async function logout ()  {
  sessionStorage.clear()
}
