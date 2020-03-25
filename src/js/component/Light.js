import React from "react";
import React, { useState } from "react";

export function Light() {
    const [color, setColor] = useState("Green");
    
    
    handleClick(){
        setColor ("selectedGreen");
    };




	return (
		<div className="container">
			<div className={color} onClick={handleClick}>
				{" "}
			</div>
			{/* <div className="yellow" onClick="selectedValue()">
				{" "}
			</div>
			<div className="green" onClick="selectedValue()">
				{" "}
			</div> */}
		</div>
	);
}
