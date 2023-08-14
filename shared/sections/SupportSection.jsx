import React from "react";

const SupportSection = () => {
	return (
		<div className="container flex flex-col items-center justify-center">
			<div className="w-full flex items-center justify-between gap-6">
				<div className="w-full"></div>
				<div className="flex flex-col items-start gap-7 text-theme-white">
					<h2 className="font-black text-5xl">
						24/7 access to full
						<br /> service customer
						<br /> support
					</h2>
					<p className="text-theme-gray text-sm">
						We invest more resources than any other platform in making sure
						great support from real people is a click away, whenever you need
						it.
					</p>
					<button className="btn-outlined-white">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default SupportSection;
