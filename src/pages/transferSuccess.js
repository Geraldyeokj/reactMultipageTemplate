import React from 'react';
import Title from '../components/Content/Title';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authenticationSimulator } from '../util/Authentication/authenticationSimulator';
import { Button } from 'antd';
import { AiOutlineCheckCircle } from "react-icons/ai"
import { assetsLink } from '../util/internalLinks';
import { useLocale } from 'antd/es/locale';

const TransferSuccess = (props) => {
	const navigate = useNavigate();
    const locationState = useLocation();
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

    function returnToAssets() {
        navigate(assetsLink)
    }

	return (
		<>
			{loggedIn ?
			<div className='flex flex-col justify-center'>
			<div className='flex flex-col justify-center items-center py-10'>
				<Title title="Transfer was Successful" moreClasses="text-center"/>
				<AiOutlineCheckCircle className='w-44 h-44 my-5 fill-green-600'/>
                <div className="flex flex-col justify-center items-center sm:w-9/12 md:w-1/2 w-9/12">
                    <div className='text-2xl'>
                        Transfer Details
                    </div>
                    <div className='grid grid-cols-3 border-2 rounded-md mt-5'>
                        <div className='col-span-1 text-right bg-gray-200 p-2'>
                            Recipient Address
                        </div>
                        <div className='col-span-2 p-2 text-left border-b-2'>
                            {locationState?.state.recipientAddress}
                        </div>
                        <div className='col-span-1 text-right bg-gray-200 p-2'>
                            Asset Type
                        </div>
                        <div className='col-span-2 p-2 text-left border-b-2'>
                            {locationState?.state.assetToSend}
                        </div>
                        <div className='col-span-1 text-right p-2 bg-gray-200'>
                            Amount Sent
                        </div>
                        <div className='col-span-2 text-left p-2'>
                            {locationState?.state.amountToSend}
                        </div>
                    </div>
                </div>
                <Button 
                    type="primary"
                    className='bg-blue-500 mt-5'
                    onClick={() => {returnToAssets()}}
                >
                    Return to Assets
                </Button>
			</div>
            
			</div>:
			<div></div>
			}
		</>
	);
};

export default TransferSuccess;
