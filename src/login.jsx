import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    function handleLogin(){
        const isAuth = true;
        if (isAuth) {
            navigate("/dashboard")
        }
        else{
            alert("Auth error")
        }
    }
    return(
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>login</button>
        </div>
    )
}