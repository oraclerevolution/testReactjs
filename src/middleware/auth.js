import {Navigate , useLocation} from "react-router-dom";


export const setToken = (token) =>{
    // set token in localStorage
    localStorage.setItem('userId', token)
}
export const fetchToken = (token) =>{
    // fetch the token
    return localStorage.getItem('userId')
}
export function RequireToken({children}) {
    
    let auth = fetchToken()
    let location = useLocation();
  
    if (!auth) {
      return <Navigate to="/" state={{ from: location }} />;
    }
  
    return children;
}