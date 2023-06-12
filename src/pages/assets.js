import React from "react";
import Title from "../components/Content/Title";
import AssetDisplay from "../components/Assets/AssetDisplay";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { authenticationSimulator } from "../components/Authentication/AuthenticationSimulator";

const Assets = () => {
	const navigate = useNavigate();
    const loggedIn = authenticationSimulator();

    useEffect(() => {
        console.log("useEffect start", loggedIn)
        if (!loggedIn) {
            const link = "/";
            navigate(link,  { 
				state: { 
					notificationMessage : "Not Logged In.",
					notificationType : "warning",
					notificationPresent : true,
				}
			});
        }
    }, [loggedIn, navigate]);

	return (
		<>
			{loggedIn ?
			<div className='flex flex-col justify-center'>
			<div className='flex flex-col justify-center items-center py-10'>
				<Title title="Your Assets" moreClasses="text-center"/>
				<AssetDisplay/>
			</div>
			</div>:
			<div></div>
			}
		</>
	);
};

export default Assets;
