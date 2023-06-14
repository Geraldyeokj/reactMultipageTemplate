import React from "react";
import Title from "../components/Content/Title";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { authenticationSimulator } from "../util/Authentication/authenticationSimulator";
import OneTimePassword from "../components/TwoFactorAuth/OneTimePassword";

const TwoFactorAuth = () => {
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
				<Title title="Enter 2-FA" moreClasses="text-center"/>
                <div className="flex flex-col justify-center items-center sm:w-9/12 md:w-1/2 w-9/12 pt-5">
                    <OneTimePassword/>
                </div>
			</div>
			</div>:
			<div></div>
			}
		</>
	);
};

export default TwoFactorAuth;