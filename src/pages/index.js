import React from 'react';
import Title from '../components/Content/Title';
import LoginForm from '../components/Form/LoginForm';

const Home = () => {
	return (
		<div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center items-center py-10'>
                <Title title="Welcome to Symphony" moreClasses="text-center"/>
                <LoginForm/>
            </div>
		</div>
	);
};

export default Home;
