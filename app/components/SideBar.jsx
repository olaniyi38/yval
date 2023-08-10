import React from "react";


const SideBar = ({ isActive }) => {
	return (
		<div className={`sidebar ${isActive ? "active" : ""}`}>
			
		</div>
	);
};

export default SideBar;
