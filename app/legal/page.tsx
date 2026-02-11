"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const documents = [
  {
    title: "Certificate of Incorporation",
    image: "/legals/coi.jpg",
  },
  {
    title: "Trade Licence",
    image: "/legals/trade-licence.jpg",
  },
  
  {
    title: "PAN Card",
    image: "/legals/pan-certificate.jpg",
  },
  {
    title: "TAN Certificate",
    image: "/legals/tan.jpg",
  },
  {
    title: "ISO",
    image: "/legals/iso.jpg",
  },
  {
    title: "Enrollment",
    image: "/legals/enrollment.jpg",
  },
];

export default function Legals() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <>
    <Navbar/>
      <section className="mx-auto max-w-6xl px-4 py-50 h-max">
        <h1 className="heading mb-10 text-center text-4xl md:text-6xl font-bold">
          Legal Documents
        </h1>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {documents.map((doc) => (
            <div
              key={doc.title}
              onClick={() => setActiveImage(doc.image)}
              className="cursor-pointer rounded-xl border p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center font-medium">{doc.title}</p>
            </div>
          ))}
        </div>
      </section>

      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/80 z-999999999">
          <div className="relative h-full w-full overflow-y-auto pt-20 pb-10">
            <button
              onClick={() => setActiveImage(null)}
              className="fixed right-6 top-6 z-50 rounded-full bg-black px-3 py-1 text-white"
            >
              ✕
            </button>

            <div className="mx-auto flex max-w-6xl justify-center px-4">
              <Image
                src={activeImage}
                alt="Document Preview"
                width={1400}
                height={2000}
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}
