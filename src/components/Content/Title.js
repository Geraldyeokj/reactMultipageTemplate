import React from "react";

const Title = (props) => {
	return (
		<div className={`sm:text-3xl md:text-3xl 3-xl ${props.moreClasses}`}>
            {props.title}
        </div>
	);
};

export default Title;
