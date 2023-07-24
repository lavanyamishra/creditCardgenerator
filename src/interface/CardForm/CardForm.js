import { useState } from "react";
import "./CardForm.css";

function CardForm({ cardState, cardDispatch, validateForm }) {
	const [cardNumberIsValid, setCardNumberIsValid] = useState(true);
	const [cvcIsValid, setCvcIsValid] = useState(true);

	function handleSubmit(e, formData) {
		e.preventDefault();
		if (formData.cardNumber.length !== 16) {
			setCardNumberIsValid(false);
		} else {
			setCardNumberIsValid(true);
		}
		if (formData.cvc.length !== 3) {
			setCvcIsValid(false);
		} else {
			setCvcIsValid(true);
		}

		if (formData.cardNumber.length === 16 && formData.cvc.length === 3) {
			console.log("Form is Valid");
			validateForm();
		}
	}
	return (
		<form onSubmit={(e) => handleSubmit(e, cardState)} className="card-form">
			<div className="card-name">
				<p className="title">cardholder name</p>

				<input
					name="cardholderName"
					value={cardState.cardholderName}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					placeholder="e.g jane appleseed"
					required={true}
					type={"text"}
					maxLength={16}
				/>
			</div>

			<div className="card-number">
				<p className="title">card number</p>
				<input
					name="cardNumber"
					value={cardState.cardNumber}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					placeholder="e.g 1234 5678 9012 3456"
					type={"number"}
					required={true}
				/>
				{!cardNumberIsValid && <p className="invalid-text">Card number has to be 16 digits</p>}
			</div>

			<div className="expiry-date">
				<p className="title">exp. date (mm/yy)</p>

				<input
					name="mm"
					value={cardState.expiryDate.mm}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					placeholder="MM"
					type={"number"}
					maxLength={2}
					minLength={2}
					max={12}
					min={1}
					required={true}
				/>
				<input
					name="yy"
					value={cardState.expiryDate.yy}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					placeholder="YY"
					type={"number"}
					min={2022}
					required={true}
					max={2028}
				/>
			</div>

			<div className="cvc">
				<p className="title">cvc</p>
				<input
					name="cvc"
					value={cardState.cvc}
					onChange={(e) => cardDispatch({ case: e.target.name, value: e.target.value })}
					placeholder="e.g 123"
					type={"number"}
					maxLength={3}
					required={true}
				/>
				{!cvcIsValid && <p className="invalid-text">CVC number is not valid</p>}
			</div>
			<button className="submit button">Confirm</button>
		</form>
	);
}

export default CardForm;
