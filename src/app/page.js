import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import {Hero}  from "@/components/home/Hero";
import HowItWork from "@/components/home/HowItWork";
import Products from "@/components/home/Products";
import Project from "@/components/home/Project";
import Testimonal from "@/components/home/Testimonal";
import WorkProcess from "@/components/home/WorkProcess";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Project/>
      <WorkProcess/>
      <Products/>
      <HowItWork/>
      <Testimonal/>
      <Contact/>
    </main>
  )
}
