import React from "react";
import Title from "../../components/Content/Title";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { clientIDSimulator } from "../../util/Authentication/clientIdSimulator";
import { authenticationSimulator } from "../../util/Authentication/authenticationSimulator";
import { getAssetInfoByUID } from "../../util/getAssetInfoByUID";
import AssetTransferForm from "./AssetTransferForm";
import { getClientHoldingsByID } from "../../util/getClientHoldingsByID";

const AssetDetails = () => {
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
					<Title title={`Transfer ${assetInfo.name}`} moreClasses="text-center"/>
					<div className="flex flex-col justify-center items-center w-full">
						<div className="grid grid-cols-3 py-3 px-3 my-3 rounded-md border-2 sm:w-9/12 md:w-2/6 lg:w-1/4 w-1/2">
							<div className="mr-3 col-span-2 text-right sm:text-base md:text-lg text-lg">
								Quantity Available:
							</div>
							<div className="col-span-1 text-right sm:text-base md:text-lg text-lg">
								{"" + (filteredHoldings[0].quantity)}
							</div>
							<div className="mr-3 col-span-2 text-right sm:text-base md:text-lg text-lg">
								Price:
							</div>
							<div className="col-span-1 text-right sm:text-base md:text-lg text-lg">
								{"$" + (assetInfo.price).toLocaleString()}
							</div>
							<div className="mr-3 col-span-2 text-right sm:text-base md:text-lg text-lg">
								Total Value:
							</div>
							<div className="col-span-1 text-right sm:text-base md:text-lg text-lg">
								{"$" + (assetInfo.price * filteredHoldings[0].quantity).toLocaleString()}
							</div>
						</div>
					</div>
					<AssetTransferForm assetToSend={assetInfo.name}/>
				</div>
			</div>:
			<div></div>
			}
		</>
	);
};

export default AssetDetails;
