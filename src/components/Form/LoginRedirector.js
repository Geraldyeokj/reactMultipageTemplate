import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginRedirect() {
    console.log("login redirector called 1");
    const navigate = useNavigate();

    console.log("login redirector called 2");
    useEffect(() => {
        navigate("/landingpage");
    });
}

export default LoginRedirect;