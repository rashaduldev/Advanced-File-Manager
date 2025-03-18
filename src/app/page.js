import FeaturesSection from "@/components/Comprehensive-Features";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Installation from "@/components/Installation";
import Navbar from "@/components/Navbar";
import Support from "@/components/Support";
import WhatsNext from "@/components/WhatNext";
import Image from "next/image";

export default function Home() {
  return (
    <div>
       <Navbar />
      <Hero />
      <Features />
      <Installation/>
      <WhatsNext/>
      <FeaturesSection/>
      <FAQ/>
      <Support/>
      <Footer/>
    </div>
  );
}
