import React from "react";
import Title from "../components/Content/Title";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { clientIDSimulator } from "../util/Authentication/clientIdSimulator";
import { authenticationSimulator } from "../util/Authentication/authenticationSimulator";
import { getAssetInfoByUID } from "../util/getAssetInfoByUID";
import AssetTransferForm from "../components/Assets/AssetTransferForm";
import { getClientHoldingsByID } from "../util/getClientHoldingsByID";
import { Button } from "antd";
import TransactionHistory from "../components/AssetDetails/TransactionHistory";

const AssetDetails = (props) => {
	const navigate = useNavigate();
    const loggedIn = authenticationSimulator();
    const params = useParams();
    console.log("asset details called", params);
	const assetInfo = getAssetInfoByUID(params.id);
	console.log("asset info", assetInfo);

	const clientId = clientIDSimulator();
	const clientHoldings = getClientHoldingsByID(clientId);
	console.log("client holdings", clientHoldings);
	const filteredHoldings = clientHoldings.filter((ele) => { return ele.id === params.id })
	console.log("filtered holdings", filteredHoldings);

    function transferAsset(nav, assetId) {
        nav("../../assetTransfer/" + params.id);
    }

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
					<Title title={`${assetInfo.name}`} moreClasses="text-center"/>
					<div className="flex flex-col justify-center items-center w-full">
                        <div className="grid grid-cols-2 py-3 px-3 my-3 sm:w-9/12 md:w-2/6 lg:w-1/4 w-1/2">
                            <Button 
                                type="primary"
                                className="col-span-1 bg-blue-600 mx-3">
                                Receive
                            </Button>
                            <Button
                                type="primary"
                                className="col-span-1 bg-blue-600 mx-3"
                                onClick={() => {
                                    transferAsset(navigate, assetInfo.assetId)
                                }}
                            >
                                Transfer
                            </Button>
                        </div>
						<div className="flex flex-col justify-center my-3 sm:w-9/12 md:w-1/2 w-1/2">
							<div className="text-center col-span-2 sm:text-base md:text-lg text-lg">
								Transaction History
							</div>
                            <TransactionHistory targetAsset={params.id}/>
						</div>
					</div>
				</div>
			</div>:
			<div></div>
			}
		</>
	);
};

export default AssetDetails;
