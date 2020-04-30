import React, { useState } from "react";

export function Light() {
	const [light, setLight] = useState("");

	const handleClick = e => {
		let { target } = e;
		// console.log(target, target.parentNode);
		Array.from(target.parentNode.children).forEach(item => {
			if (item.id === target.id) {
				target.classList.add("selectedColor");
			} else {
				item.classList.remove("selectedColor");
				console.log("HEEEEEYYY", item);
			}
		});
	};

	return (
        <>
        <h1>Im a Light</h1>
		<div className="container">
			<button id="redLight" onClick={handleClick} />
			<button id="yellowLight" onClick={handleClick} />
			<button id="greenLight" onClick={handleClick} />
		</div>
        </>
	);
}
