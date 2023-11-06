import React from "react";
import { useState, useEffect } from 'react';

//include images into your bundle
import SimpleCounter from './simpleCounter'
import calculateSeconds from './lib'
//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0);
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		let interval;
	
		if (isRunning) {
		  interval = setInterval(() => {
			setCounter((counter) => counter + 1);
		  }, 100);
		}
	
		return () => clearInterval(interval);
	  }, [isRunning]);
	
	  const resetCounter = () => {
		setCounter(0);
		setIsRunning(true); // Start the counter when resetting
	  };
	
	  const stopCounter = () => {
		setIsRunning(false);
	  };
	

	

	return (
		<>
			<SimpleCounter 
			thousandsDigit = {calculateSeconds(counter, 10000)}
			hundredsDigit = {calculateSeconds(counter, 1000)}
			tensDigit = {calculateSeconds(counter, 100)}
			onesDigit = {calculateSeconds(counter, 10)}
			fractionDigit = {calculateSeconds(counter, 1)}	
			
			/>

		<div className="buttons">
			<button onClick={resetCounter}>Reset</button>
			<button onClick={stopCounter}>stop</button>
		</div>

		</>
	);
};

export default Home;
