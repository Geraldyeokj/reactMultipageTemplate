import React from "react";
import Title from "../../components/Content/Title";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { authenticationSimulator } from "../../util/Authentication/authenticationSimulator";

const AssetDetails = () => {
	const navigate = useNavigate();
    const loggedIn = authenticationSimulator();
    const params = useParams();
    console.log("asset details called", params)

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
				<Title title={`Transfer ${params.id}`} moreClasses="text-center"/>
			</div>
			</div>:
			<div></div>
			}
		</>
	);
};

export default AssetDetails;
