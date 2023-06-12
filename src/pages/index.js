import React from 'react';
import Title from '../components/Content/Title';
import LoginForm from '../components/Form/LoginForm';

import { useLocation } from "react-router-dom";

const Home = (props) => {
    const locationState = useLocation();
	console.log("props", locationState);
	return (
		<div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center items-center py-10'>
                <Title title="Welcome to SymLink" moreClasses="text-center"/>
                <LoginForm/>
            </div>
		</div>
	);
};

export default Home;
