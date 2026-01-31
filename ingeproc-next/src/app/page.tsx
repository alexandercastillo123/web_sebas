import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import ServicesGrid from "@/components/home/ServicesGrid";
import Clients from "@/components/home/Clients";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <ServicesGrid />
      <Clients />
    </main>
  );
}
