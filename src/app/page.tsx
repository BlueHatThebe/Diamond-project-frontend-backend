import Image from "next/image";
import HomeScreen from "@/components/HomeScreen";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<HomeScreen />
		</main>
	);
}
