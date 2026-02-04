import React from 'react'
import { StickyCard_003 } from "@/components/ui/skiper-ui/skiper34";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fs from "fs";
import path from "path";




const Gallery = () => {
  const galleryDir = path.join(process.cwd(), "public/gallery");

  const images = fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file))
    .map((file) => `/gallery/${file}`);
  return (
    <>
    <Navbar/>
      <section className="relative flex w-screen flex-col items-center gap-[10vh] py-[10vh]">
      {images.map((img, idx) => (
        <StickyCard_003 key={idx} imgUrl={img} />
      ))}
    </section>
    <Footer/>
    </>
  )
}

export default Gallery
