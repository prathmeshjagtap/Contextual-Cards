import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
	return (
		<nav>
			<div className="nav__icons__container">
				<i className="fas fa-square"></i>
				<i className="fas fa-circle"></i>
				<i class="fas fa-caret-down caret__down"></i>
			</div>
			<div className="logo__container">
				<h2 className="logo__text">fampay</h2>
				<img className="logo__icon" src={logo} alt="logo" />
			</div>
		</nav>
	);
}

export { Navbar };
