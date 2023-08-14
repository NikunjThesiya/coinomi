import Image from "next/image";
import React from "react";
import logo from "@/shared/assets/images/logo-white.svg";

const Header = () => {
	return (
		<div className="container">
			<div className="flex items-center justify-between gap-4">
				<Image
					src={logo}
					width={150}
					height={40}
					className="object-contain"
					alt="coinomi"
				/>
				<div className="flex text-theme-white items-center gap-8 text-sm">
					<span>Buy / Sell</span>
					<span>Grow</span>
					<span>Market</span>
					<span>Business</span>
					<span>Support</span>
				</div>
				<div className="flex items-center text-theme-white gap-3">
					<button className="btn-outlined-white">Sign In</button>
					<button className="btn-filled-gradient">Sign Up</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
