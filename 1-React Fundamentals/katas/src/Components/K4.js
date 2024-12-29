import React from 'react';

export const Greet = props => {
    console.log("hello");
    return (<div>Heelloo {props.name} {props.children}</div>)
};

