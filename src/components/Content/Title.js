import React from "react";

const Title = (props) => {
	return (
		<div className={`sm:text-2xl md:text-3xl ${props.moreClasses}`}>
            {props.title}
        </div>
	);
};

export default Title;
