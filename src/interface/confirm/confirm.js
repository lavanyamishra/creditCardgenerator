import React from "react";


function Success({ setFormIsValid, clearForm }) {
	return (
		<div className="success">
<h2>Success!!!</h2>
			<button
				className="button"
				onClick={() => {
					setFormIsValid(false);
					clearForm();
				}}
			>
				continue
			</button>
		</div>
	);
}

export default Success;
