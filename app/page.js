import Header from "@/shared/components/Header";
import HeroSection from "@/shared/sections/HeroSection";
import SupportSection from "@/shared/sections/SupportSection";
import Image from "next/image";
import SpringImg from "@/shared/assets/images/bg-img.svg";
import ServiceSection from "@/shared/sections/ServiceSection";

export default function Home() {
	return (
		<div className="w-full bg-herosection bg-top bg-no-repeat">
			<Header />
			<div className="relative">
				<Image
					src={SpringImg}
					alt="bg"
					className="absolute object-contain -z-10 right-0 top-[20%]"
				/>
				<HeroSection />
				<div className="pt-[240px]">
					<SupportSection />
					<ServiceSection />
				</div>
			</div>
		</div>
	);
}
