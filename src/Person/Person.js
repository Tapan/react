import React from 'react';

const person = ( props ) => {
	return (
	    <div>
		  <p onClick={props.click}>I'm a Person and my name is {props.name} and {props.age}</p>
		  <p>{props.children}</p>
		  <input type="text" onChange={props.changed} value={props.name}/>
		</div>
	)
};

export default person;