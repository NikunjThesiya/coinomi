import Image from "next/image";
import React from "react";

const ServiceCard = ({ icon, title, description, linkText }) => {
	return (
		<div className="w-full py-8 px-6 bg-theme-darkGray text-theme-white flex flex-col items-center gap-4 justify-center text-center rounded-3xl">
			<div className="flex items-center bg-theme-white bg-opacity-5 border border-theme-white border-opacity-10 justify-center p-4 rounded-full">
				<Image src={icon} alt="icon" />
			</div>
			<span className="text-3xl font-extrabold">{title}</span>
			<p className="text-theme-gray text-base">{description}</p>
			<div className="text-theme-purple font-semibold text-base mt-4 flex items-center gap-3">
				<span>{linkText}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
					/>
				</svg>
			</div>
		</div>
	);
};

export default ServiceCard;
