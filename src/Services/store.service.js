import API from "../api/axios";

const STORE_URL=
{
    URL:"/stores",
    URL_ID:"store/"

}
const HEADER=
{
    headers: { 'Content-Type': 'application/json' }
}



export async function getAll(){

    const response = await API.get(STORE_URL.URL,HEADER)
    return response.data
}


export async function createStore(user_id,category_id,title,body)
{
    const data={user_id,category_id,title,body}
    const response = await API.post(STORE_URL.URL,HEADER,data,)
        

        return response.data
}


