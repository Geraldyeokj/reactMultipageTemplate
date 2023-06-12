import { useEffect, useState, useRef} from "react";
import { Button } from 'antd';
import WalletAddress from "./WalletAddress";
import TokenTable2 from "./TokenTable2";
import NftTable from "./NftTable";
import { authenticationSimulator } from "../Authentication/AuthenticationSimulator";

export default function AssetDisplay() {
    const [assetView, setAssetView] = useState(false);
    const loggedIn = authenticationSimulator();
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const window_width = windowSize["current"][0];
    console.log("window size", windowSize)

    return (
        <>
            {loggedIn ?
                // If logged in
                (<div className="flex flex-col justify-center py-10 sm:w-9/12 md:w-1/2">
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
                        <TokenTable2 w_size={window_width/2}/>
                    </div>
                    }
                </div>) :
                <div>Not Logged In</div>
            }
        </>
        
    );
};
