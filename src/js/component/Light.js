import React, { useState } from "react";

export function Light() {
	const [state, setState] = useState({color:""});

	const handleClick = (color) => {
        if ()
		setColor("selectedGreen");
	};

	return (
		<div className="container">
			<button className={"redUnselected " +  color}  onClick={handleClick(green)}>
				{" "}
				Click
			</button>
			<button className={color.yellow} onClick={handleClick}>
				{" "}
				Click
			</button>
			<button className={color.red} onClick={handleClick}>
				{" "}
				Click
			</button>
		</div>
	);
}
