"use client";

import { useEffect, useState, useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface EventbriteEvent {
  url: string;
}

export default function Hero() {
  const [eventUrl, setEventUrl] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Image URL
  const imageUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070";
  
  // Preload the image to check if it can be loaded
  useEffect(() => {
    const img = new globalThis.Image();
    img.src = imageUrl;
    img.onload = () => {
      console.log("Background image loaded successfully");
      setImageLoaded(true);
      
      // Apply the background directly to the DOM element for maximum compatibility
      if (containerRef.current) {
        containerRef.current.style.backgroundImage = `url('${imageUrl}')`;
      }
    };
    img.onerror = () => {
      console.error("Failed to load background image");
      setImageError(true);
    };
  }, [imageUrl]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events");
        if (!response.ok) throw new Error("Failed to fetch events");

        const data = await response.json();
        if (data.length > 0) {
          setEventUrl(data[0].url); // Only use the first event (closest upcoming event)
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-[600px] bg-[#102A43]"
      style={{ 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Fallback image using Next.js Image component */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={imageUrl}
            alt="Hero background"
            fill
            priority
            quality={90}
            style={{ objectFit: 'cover' }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      )}
      
      {/* Fallback for when image fails to load - technology-inspired gradient */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#102A43] via-[#1A2B3C] to-[#0097A7] z-0"></div>
      )}
      
      {/* Technology-inspired gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#102A43]/80 via-[#1A2B3C]/60 to-[#0097A7]/30 z-10" />
      
      {/* Content with glassmorphism effect */}
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center z-20">
        <motion.div 
          className="max-w-2xl bg-[#FFFFFF10] backdrop-blur-xl border border-[#33C5E5]/20 rounded-2xl shadow-lg p-10 text-[#F5F7FA]"
          style={{
            boxShadow: '0 8px 32px 0 rgba(0, 151, 167, 0.2)'
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to <span className="text-[#33C5E5] drop-shadow-sm">{'{dev.talk}'}</span></h1>
          <p className="text-xl mb-6 text-[#D9F1F7]">
            A community-driven monthly meetup bringing together software engineers and tech professionals in the Bournemouth and Dorset area.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 text-[#D9F1F7]">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#33C5E5]" />
              <span>Next Event: March 26th, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#6610F2]" />
              <span>Cottonwood, Bournemouth</span>
            </div>
          </div>
          {eventUrl && (
            <motion.a 
              href={eventUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-[#FF6B35] hover:bg-[#FF8B55] px-6 py-3 rounded-lg text-white font-semibold uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/30 border border-[#FF6B35]/10"
              style={{
                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.2)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 20px rgba(255, 107, 53, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
          )}
        </motion.div>
      </div>
    </div>
  );
}
