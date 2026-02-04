"use client"

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SouthIcon from '@mui/icons-material/South';
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import RankStats from "../components/assets/RankStats";
import Footer from "../components/Footer";

export default function Home() {
     return (
      <>
        <Navbar />
        <Hero />
        {/* <button
          onClick={toggleTheme}
          className="fixed bottom-5 right-5 "
        >
          <ThemeToggleButton2 className="h-10 w-10" />
        </button> */}
        <a href={'#services'}>
          <SouthIcon fontSize="large" className="relative bottom-10 left-[50%] cursor-pointer animate-bounce z-99" />
        </a>
        <Services />
        <RankStats/>
        <About />
        <Contact />
        <Footer/>
      </>
    );
  }
