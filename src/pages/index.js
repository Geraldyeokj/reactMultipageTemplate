import React from 'react';
import Title from '../components/Content/Title';
import LoginForm from '../components/Form/LoginForm';
import CreateNotification from "../components/Notification/CreateNotification";

import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const {location} = useLocation();
    const {locationState} = useLocation();
    const { state } = useNavigate();
    //const { notificationText } = navigateState
	console.log("props", props, props?.location, props?.location?.state ,location, location?.state, locationState);
	return (
		<div className='flex flex-col justify-center'>
			<CreateNotification type="info"/>
            <div className='flex flex-col justify-center items-center py-10'>
                <Title title="Welcome to Symphony" moreClasses="text-center"/>
                <LoginForm/>
            </div>
		</div>
	);
};

export default Home;
