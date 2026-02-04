import type { Metadata } from "next";
import { Oxanium } from 'next/font/google'
import "./globals.css";
// import LoaderWrapper from '@/components/LoaderWrapper';

export const metadata: Metadata = {
    title: 'Youthsuccess Eccomerce Pvt. Ltd.',
    description: "YouthSuccess Ecommerce Pvt. Ltd. was incorporated on 2nd January 2026 and is a diversified enterprise led by experienced professionals with a strong record of industry achievements. The company operates across Ornament Business, E-Commerce, Insurance Broking, Real Estate, Land Development, and Trading, with a strategic focus on structured growth, governance, and long-term value creation. Over the next decade, YouthSuccess aims to establish a leading presence across its core business verticals through disciplined execution and sustainable expansion.",
    icons: {
        icon: '/logo.jpeg',
        // shortcut: '/shortcut-icon.png',
        // apple: '/apple-icon.png',
        // other: {
        //     rel: 'apple-touch-icon-precomposed',
        //     url: '/apple-touch-icon-precomposed.png',
        // },
    },
    
    // Robots
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

const oxanium = Oxanium()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oxanium.className}>
      <body>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
         {/* <LoaderWrapper> */}
          {children}
        {/* </LoaderWrapper> */}
        {/* </ThemeProvider> */}
        </body>
    </html>
  );
}
