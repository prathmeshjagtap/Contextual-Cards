import React, { useState } from "react";
import { useDataContext } from "../../context";
import { useLongPress } from "../../hooks";
import { getFilteredCards } from "../../utils";
import { DisplayText } from "../index";
import "./bigDisplayCard.css";

function DisplayCard({ card }) {
	const { cardsArray, setCardArray } = useDataContext();
	const { cardsData, dismissedCards } = cardsArray;
	const [cardlongPressed, setcardLongPressed] = useState(false);

	const onLongPress = () => {
		setcardLongPressed(true);
	};

	const onClick = () => {
		window.open(`${card.url}`, "_self");
	};

	const defaultOptions = {
		shouldPreventDefault: true,
		delay: 300,
	};
	const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

	const remindLater = () => {
		let updateCards = getFilteredCards(cardsData, card);
		setCardArray({ ...cardsArray, cardsData: updateCards });
	};

	const dismissNow = () => {
		let updateCards = getFilteredCards(cardsData, card);
		setCardArray({
			...cardsArray,
			cardsData: updateCards,
			dismissedCards: [...dismissedCards, card.name],
		});
	};

	return (
		<div className="bigDisplayCard__action">
			{cardlongPressed ? (
				<div className="action__container">
					<div className="action__buttons" onClick={remindLater}>
						<svg
							width="18"
							height="21"
							viewBox="0 0 18 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M16.865 17.451C17.225 17.451 17.515 17.161 17.515 16.811C17.515 16.641 17.445 16.471 17.325 16.351L15.305 14.101V9.141C15.305 9.141 15.775 3.221 10.425 2.21V1.67C10.425 0.741 9.675 0 8.755 0C7.835 0 7.085 0.75 7.085 1.67V2.21C1.745 3.221 2.205 9.141 2.205 9.141V14.101L0.195 16.351C-0.065 16.601 -0.065 17.01 0.195 17.26C0.315 17.38 0.475 17.451 0.645 17.451H6.545C6.505 17.621 6.485 17.801 6.485 17.981C6.485 19.231 7.505 20.241 8.755 20.241C10.005 20.241 11.025 19.231 11.025 17.981C11.025 17.801 11.005 17.621 10.965 17.451H16.865ZM7.72231 4.92992C8.03657 4.82482 8.20613 4.48485 8.10102 4.17059C7.99592 3.85633 7.65596 3.68678 7.3417 3.79188C5.30644 4.47257 3.93346 6.37672 3.93801 8.52317C3.93871 8.85454 4.20791 9.1226 4.53928 9.1219C4.87065 9.1212 5.13871 8.852 5.138 8.52063C5.13455 6.89308 6.17557 5.44723 7.72231 4.92992Z"
								fill="#FBAF03"
							/>
						</svg>
						<p className="action__buttons__text">remind later</p>
					</div>
					<div className="action__buttons" onClick={dismissNow}>
						<svg
							width="19"
							height="19"
							viewBox="0 0 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M18.145 9.07C18.145 4.062 14.084 0 9.075 0C4.061 0.005 0.004 4.062 0 9.075C0 14.084 4.061 18.146 9.07 18.146C14.084 18.141 18.141 14.084 18.145 9.07Z"
								fill="#FBAF03"
							/>
							<path
								d="M10.0909 7.90909L13 5"
								stroke="white"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 13L7.90909 10.0909"
								stroke="white"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10.0909 10.0909L13 13"
								stroke="white"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 5L7.90909 7.90909"
								stroke="white"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p className="action__buttons__text">dismiss now</p>
					</div>
				</div>
			) : null}
			<div
				className={`bigDisplayCard ${
					cardlongPressed ? "bigDisplayCard_slide" : ""
				}  `}
				key={card?.url}
				{...longPressEvent}
				style={{
					backgroundImage: `url(${card?.bg_image?.image_url})`,
					backgroundColor: card?.bg_color,
					aspectRatio: card.bg_image?.aspect_ratio,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<h2 className="bigDisplayCard__title">
					<DisplayText
						formattedTitle={card.formatted_title}
						simpleTitle={card.title}
					/>
				</h2>
				<h2 className="bigDisplayCard__description">
					<DisplayText
						formattedTitle={card.formatted_description}
						simpleTitle={card.description}
					/>
				</h2>
				{card?.cta?.map((ctaButton) => (
					<button
						key={ctaButton?.text}
						onClick={(e) => {
							e.stopPropagation();
							window.open(`${ctaButton?.url}`, "_self");
						}}
						style={{
							backgroundColor: ctaButton?.bg_color,
							color: ctaButton?.text_color,
						}}
						className="bigDisplayCard__button"
					>
						{ctaButton?.text}
					</button>
				))}
			</div>
		</div>
	);
}

export { DisplayCard };
