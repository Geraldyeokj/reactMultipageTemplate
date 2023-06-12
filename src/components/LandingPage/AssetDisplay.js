import { useEffect, useState, useRef} from "react";
import { Button } from 'antd';
import WalletAddress from "./WalletAddress";
import TokenTable from "./TokenTable";
import TokenTable2 from "./TokenTable2";
import NftTable from "./NftTable";
import { useNavigate } from 'react-router-dom'

// INCLUDE API INTEGRATION
const checkIfLoggedIn = () => {
    //CALL API
    return true;
}

export default function AssetDisplay() {
    const navigate = useNavigate();
    const [assetView, setAssetView] = useState(false);
    const [loggedIn, setLoggedIn] = useState(checkIfLoggedIn())

    useEffect(() => {
        console.log("useEffect start", loggedIn)
        if (!loggedIn) {
            const state = {state: {notificationMessage : "Not Logged In."}};
            const link = "/";
            console.log("state", state, "link", link);
            navigate(link, { state: { notificationMessage : "Not Logged In." } });
        }
    }, [loggedIn, navigate]);

    return (
        <>
            {loggedIn ?
                // If logged in
                (<div className="flex flex-col justify-center py-10 w-1/2">
                    <div className="flex justify-center flex-col">
                        <WalletAddress/>
                    </div>
                    <div className="flex justify-center flex-row">
                        <Button 
                            className="bg-blue-600 flex text-base text-center w-28 mx-5" 
                            type="primary" 
                            htmlType="submit"
                            onClick={() => {setAssetView(false)}}
                        >
                            <div className="w-full text-center">Tokens</div>
                        </Button>
                        <Button 
                            className="bg-blue-600 flex text-base text-center w-28 mx-5" 
                            type="primary" htmlType="submit"
                            onClick={() => {setAssetView(true)}}
                        >
                            <div className="w-full text-center">NFT</div>
                        </Button>
                    </div>
                    {assetView ? 
                    <div className="flex justify-center flex-col mt-5 outline outline-slate-500 outline-1 rounded-lg">
                        <NftTable/>
                    </div>:
                    <div className="flex justify-center flex-col mt-5 outline outline-slate-500 outline-1 rounded-lg">
                        <TokenTable2/>
                    </div>
                    }
                </div>) :
                <div>Not Logged In</div>
            }
        </>
        
    );
};
