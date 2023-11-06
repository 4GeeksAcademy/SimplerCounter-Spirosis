import React from "react";
import { useState, useEffect } from 'react';

//include images into your bundle
import SimpleCounter from './simpleCounter'
import calculateSeconds from './lib'
//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0);

	useEffect(()=> {
		const interval = setInterval (() => {
			setCounter( counter => counter +1);
			}, 100)
			console.log(counter)
			return ()=> clearInterval(interval);
		
	}, [counter])



	return (
		<>
			<SimpleCounter 
			thousandsDigit = {calculateSeconds(counter, 10000)}
			hundredsDigit = {calculateSeconds(counter, 1000)}
			tensDigit = {calculateSeconds(counter, 100)}
			onesDigit = {calculateSeconds(counter, 10)}
			fractionDigit = {calculateSeconds(counter, 1)}	
			
			/>
		</>
	);
};

export default Home;
