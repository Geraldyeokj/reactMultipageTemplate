import React from "react";
import Title from "../components/Content/Title";
import AssetDisplay from "../components/LandingPage/AssetDisplay";

const LandingPage = () => {
	return (
		<div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center items-center py-10'>
                <Title title="Your Assets" moreClasses="text-center"/>
				<AssetDisplay/>
            </div>
		</div>
	);
};

export default LandingPage;
