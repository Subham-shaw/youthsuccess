import React from 'react'
import { StickyCard_003 } from "@/components/ui/skiper-ui/skiper34";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LaunchIcon from '@mui/icons-material/Launch';

// const images = Array.from({ length: 56 }, (_, i) => `/gallery/${i + 1}.jpg`);
const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
]

const Gallery = () => {
  return (
    <>
      <Navbar />
      <section className='flex w-screen flex-col items-center'>
        <div className="relative  gap-[10vh] py-[10vh]">
          {images.map((img, idx) => (
            <StickyCard_003 key={idx} imgUrl={img} />
          ))}

        </div>
        <a href="https://drive.google.com/drive/folders/11gorLy55WfB0OFyUb3srXrWqqIsb3RhL?usp=sharing" target='_blank' className="p-2 m-2 text-2xl font-bold mb-20" id='login'>
          <LaunchIcon /> View More
        </a>
      </section>
      
      <Footer />
    </>
  )
}

export default Gallery
