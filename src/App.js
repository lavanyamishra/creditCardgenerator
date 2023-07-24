import { useEffect, useReducer, useState } from "react";

import "./App.css";

import backgroundDesktop from "./images/bg-main-desktop.png";
import backgroundMobile from "./images/bg-main-mobile.png";
import CardForm from "./interface/CardForm/CardForm";
import Cards from "./interface/Cards/Cards";
import Success from "./interface/confirm/confirm";

const initialCardState = {
	cardholderName: "",
	cardNumber: "",
	expiryDate: {
		mm: "",
		yy: "",
	},
	cvc: "",
};

const reducer = (currentCardValue, action) => {
	switch (action.case) {
		case "cardholderName":
			return { ...currentCardValue, cardholderName: action.value };
		case "cardNumber":
			return { ...currentCardValue, cardNumber: action.value };
		case "mm":
			return {
				...currentCardValue,
				expiryDate: { ...currentCardValue.expiryDate, mm: action.value },
			};
		case "yy":
			return {
				...currentCardValue,
				expiryDate: { ...currentCardValue.expiryDate, yy: action.value },
			};
		case "cvc":
			return { ...currentCardValue, cvc: action.value };
		case "reset":
			return initialCardState;
		default:
			return currentCardValue;
	}
};

function App() {
	const [cardState, cardDispatch] = useReducer(reducer, initialCardState);
	const [mobile, setMobile] = useState(window.matchMedia("(max-width:700px)").matches);
	const [formIsValid, setFormIsValid] = useState(false);

	function validateForm() {
		setFormIsValid(true);
	}
	function clearForm() {
		cardDispatch({ case: "reset" });
	}
	useEffect(() => {
		window.matchMedia("(max-width:700px)").addEventListener("change", (e) => setMobile(e.matches));
	}, []);

	const styles = {
		backgroundImage: !mobile ? `url(${backgroundDesktop})` : `url(${backgroundMobile})`,
		backgroundRepeat: "no-repeat",
	};

	return (
		<main style={styles}>
			<Cards cardState={cardState} />
			{formIsValid ? (
				<Success clearForm={clearForm} setFormIsValid={setFormIsValid} />
			) : (
				<CardForm validateForm={validateForm} cardState={cardState} cardDispatch={cardDispatch} />
			)}
		</main>
	);
}

export default App;
