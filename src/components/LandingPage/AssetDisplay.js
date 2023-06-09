import { useEffect, useState, useRef} from "react";
import { Button } from 'antd';
import WalletAddress from "./WalletAddress";
import TokenTable from "./TokenTable";
import TokenTable2 from "./TokenTable2";
import NftTable from "./NftTable";

export default function AssetDisplay() {
    const elRef = useRef();
    const [width, setWidth] = useState(0);

    const [assetView, setAssetView] = useState(false);

    useEffect(() => {
        console.log("elRef", elRef)
        if (!elRef?.current?.clientWidth) {
            return;
          }
        setWidth(elRef?.current?.clientWidth);
    }, []);

    return (
            <div className="flex flex-col justify-center py-10 w-1/2">
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
                    <TokenTable2 w_width={width}/>
                </div>
                }
            </div>
    );
};