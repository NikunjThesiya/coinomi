import React from "react";
import ServiceCard from "../components/ServiceCard";
import CASHIMG from "@/shared/assets/images/icons/cash.svg";
import TRADEIMG from "@/shared/assets/images/icons/trade.svg";
import WALLETIMG from "@/shared/assets/images/icons/wallet.svg";
import Circles from "@/shared/assets/images/circles.svg";
import Image from "next/image";

const ServiceSection = () => {
	return (
		<div className="pb-[100px]">
			<div className="relative container flex flex-col items-center justify-center">
				<Image
					src={Circles}
					alt="bg"
					className="absolute -z-10 w-full left-0 top-0"
				/>
				<div className="grid grid-cols-3 w-full gap-5 mt-[120px]">
					<ServiceCard
						icon={TRADEIMG}
						title="Trade Desk"
						description="Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
						linkText="Get Started"
					/>
					<ServiceCard
						icon={CASHIMG}
						title="Coinomi ATMs"
						description="We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto"
						linkText="Find an ATM"
					/>
					<ServiceCard
						icon={WALLETIMG}
						title="Coinomi Wallet"
						description="Store your growing investments in our
non-custodial wallet that gives you access to a full suite of DeFi services in one place"
						linkText="Download the App"
					/>
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
