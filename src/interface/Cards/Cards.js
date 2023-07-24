import React from "react";
import frontCard from "../../images/bg-card-front.png";
import backCard from "../../images/bg-card-back.png";
import cardLogo from "../../images/card-logo.svg";
import "./Cards.css";
function Cards(props) {
	const { cardholderName, cardNumber, expiryDate, cvc } = props.cardState;
	function displayCardNumber(cardNumber) {
		let newCardNumber = cardNumber + "0000000000000000";
		newCardNumber = newCardNumber.slice(0, 16);
		return `${newCardNumber.slice(0, 4)} ${newCardNumber.slice(4, 8)} ${newCardNumber.slice(
			8,
			12
		)} ${newCardNumber.slice(12, 16)}`;
	}
	return (
		<div className="cards">
			<div className="card-front card">
				<img className="card-img" src={frontCard} alt="" />
				<div className="card-content">
					<img className="logo" src={cardLogo} alt="" />
					<h1 className="card-number">{displayCardNumber(cardNumber) || "0000 0000 0000 0000"}</h1>
					<div className="flex">
						<p className="cardholder-name">{cardholderName || "Harshitha"}</p>
						<p>
							{expiryDate.mm || "00"}/{expiryDate.yy || "00"}
						</p>
					</div>
				</div>
			</div>

			<div className="card-back card">
				<img className=" card-img" src={backCard} alt="" />
				<div className="card-content">
					<p className="cvc">{cvc}</p>
				</div>
			</div>
		</div>
	);
}

export default Cards;
