'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LaunchIcon from '@mui/icons-material/Launch'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <Navbar />

      <section className="w-full flex flex-col items-center px-4 py-20">
        <h1 className='heading text-4xl md:text-7xl font-semibold py-20'>Our Precious Moments</h1>
        {/* Gallery Grid */}
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="relative cursor-pointer w-full sm:w-[48%] md:w-[31%] lg:w-[23%] aspect-square overflow-hidden rounded-xl shadow-md hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={img}
                alt="Gallery picture"
                fill
                className="object-cover duration-300"
              />
            </div>
          ))}
        </div>

        {/* View More */}
        <a
          href="https://drive.google.com/drive/folders/11gorLy55WfB0OFyUb3srXrWqqIsb3RhL?usp=sharing"
          target="_blank"
          className="btn-green p-1.5 m-2 text-xl font-bold mt-12"
        >
          <LaunchIcon /> View More
        </a>

      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999]">

          {/* Clickable Overlay */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          />

          {/* Image Wrapper (does NOT block overlay except image itself) */}
          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div className="pointer-events-auto max-w-6xl w-full">
              <Image
                src={selectedImage}
                alt="Full view"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
              />
            </div>
          </div>

        </div>
      )}







      <Footer />
    </>
  )
}

export default Gallery
