

export const reducer = (state, action) => {


    switch(action.type){
        case "cleanState": {
            //State goes back to default values
            return {
                loggedInUser: ""
            }
        }
        case "setLoggedInUser": {
            //updates the loggedInUser value
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case "setAdmin": {
            //updates the loggedInUser value
            return {
                ...state,
                admin: action.data
            }
        }
        case "setToken": {
            //updates the token value
            return {
                ...state,
                token: action.data
            }
        }
        case "setEmail": {
            //updates the token value
            return {...state,email:action.payload}

        }
        case "setPassword": {
            //updates the token value
            return {...state,password:action.payload}  

        }
        case "setStoresId": {
            //updates the token value
            return {...state,storeId:action.data}  

        }
        default: return state
    }

}