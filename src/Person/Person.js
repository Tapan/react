import React from 'react';

const person = (props) => {
	return (
	    <div>
		  <p>I'm a Person and my name is {props.name} and {props.age}</p>
		  <p>{props.children}</p>
		</div>
	)
};

export default person;