import React from 'react'
import { StickyCard_003 } from "@/components/ui/skiper-ui/skiper34";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = Array.from({ length: 56 }, (_, i) => `/gallery/${i + 1}.jpg`);

const Gallery = () => {
  return (
    <>
      <Navbar />
      <section className="relative flex w-screen flex-col items-center gap-[10vh] py-[10vh]">
        {images.map((img, idx) => (
          <StickyCard_003 key={idx} imgUrl={img} />
        ))}
      </section>
      <Footer />
    </>
  )
}

export default Gallery
