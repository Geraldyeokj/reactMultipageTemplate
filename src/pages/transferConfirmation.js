import React from 'react';
import Title from '../components/Content/Title';
import TransferDescription from '../components/TransferConfirmation/TransferDescription';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticationSimulator } from '../util/Authentication/authenticationSimulator';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { transferConfirmationLink } from '../util/internalLinks';
import { postAssetTransfer } from '../util/postAssetTransfer';
import { transferSuccessLink } from '../util/internalLinks';

const TransferConfirmation = (props) => {
	const locationState = useLocation();
    console.log("transfer confirmation props", locationState);
	const navigate = useNavigate();
    const loggedIn = authenticationSimulator();

	const userAddress = locationState?.state?.userAddress
	const recipientAddress = locationState?.state?.recipientAddress
	const amountToSend = locationState?.state?.amountToSend
	const assetToSend = locationState?.state?.assetToSend

	function navigateWrapper (navigate) {
		//console.log("navigate wrapper called");;
		try {
			const ret = postAssetTransfer();
			//console.log("ret", ret)
			if (ret?.message === "success") {
				//alert("navigating sending")
				navigate(transferSuccessLink,  { 
					state: { 
						notificationMessage : "Transfer Succeeded",
						notificationType : "success",
						notificationPresent : true,
						recipientAddress: recipientAddress,
						amountToSend: amountToSend,
						assetToSend: assetToSend,
					}
				});
			}
		} catch (error) {
			navigate(transferConfirmationLink,  { 
				state: { 
					notificationMessage : "Transfer Failed",
					notificationType : "error",
					notificationPresent : true,
				}
			});
		}
	}


    useEffect(() => {
        console.log("useEffect start", loggedIn);
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
				<Title title="Confirm Transfer Details" moreClasses="text-center"/>
				<TransferDescription 
					userAddress={userAddress}
					recipientAddress={recipientAddress}
					amountToSend={amountToSend}
				/>
				<Button onClick={() => {
						//console.log("transfer initiated")
						navigateWrapper(navigate)
					}} type='primary' className='bg-blue-500'>
					Send
				</Button>
			</div>
			</div>:
			<div></div>
			}
		</>
	);
};

export default TransferConfirmation;
