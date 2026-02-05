import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import ServicesGrid from "@/components/home/ServicesGrid";
import Works from "@/components/home/Works";
import Clients from "@/components/home/Clients";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <ServicesGrid />
      <Works />
      <Clients />
    </main>
  );
}
