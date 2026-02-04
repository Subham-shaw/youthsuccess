'use client';

import React, { useState, useEffect } from 'react';

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Mark as mounted to prevent hydration errors
    setIsMounted(true);

    // 2. Wait 2 seconds, then fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) return null;

  return (
    <>
      {/* The Overlay */}
      <div className={`splash-overlay ${isLoading ? 'visible' : 'hidden'}`}>
        <img 
          src="/rocking-horse.gif" 
          alt="Loading..." 
          width={300} 
          height={300} 
        />
      </div>

      {/* The Content */}
      <div className="content">
        {children}
      </div>

      <style jsx>{`
        .splash-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999; /* Higher than loading.tsx */
          transition: opacity 0.5s ease-out, visibility 0.5s;
        }

        .visible {
          opacity: 1;
          visibility: visible;
        }

        .hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        /* Optional: Freeze scrolling while splash is visible */
        :global(body) {
          overflow: ${isLoading ? 'hidden' : 'auto'};
        }
      `}</style>
    </>
  );
}