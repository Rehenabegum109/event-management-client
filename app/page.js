// import Hero from "@/components/Hero";

import EventCard from "@/component/EventCard";
import Features from "@/component/Features";

import Hero from "@/component/Hero";
import Testimonials from "@/component/Testonials";

export default function Home() {
  return (
    <>
     <div className="bg-[#55efc4]">
      <Hero />
      <Features/>
      <EventCard/>
      <Testimonials/>
      </div>
      
    </>
  );
}
