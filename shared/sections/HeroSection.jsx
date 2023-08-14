import React from "react";

const HeroSection = () => {
	return (
		<div className="container h-[700px] flex flex-col items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-4">
				<h2 className="text-[85px] font-black text-theme-white text-center leading-[130%]">
					We make crypto
					<br /> clear and simple
				</h2>
				<p className="text-theme-gray text-center">
					Buy, sell, and grow your crypto with Coinomi, the platform dedicated
					<br />
					to every trader at every level.
				</p>
				<button className="btn-filled-gradient-lg mt-4">Get Started</button>
			</div>
		</div>
	);
};

export default HeroSection;
