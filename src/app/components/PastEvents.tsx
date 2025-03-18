"use client";

import { Play, Clock, Eye } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const pastEvents = [
  {
    title: "The one where we forged friendships",
    views: "8.2K",
    duration: "1:45:20",
    thumbnail: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=2070",
    date: "February 26th 2025",
  },
  {
    title: "The one where we deployed our first PATCH",
    views: "7.5K",
    duration: "1:38:15",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070",
    date: "January 30th 2025",
  },
  {
    title: "The one where we got started",
    views: "10K",
    duration: "1:52:30",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070",
    date: "November 27th 2024",
  },
];

export default function PastEvents() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#131528] via-[#1E1E3F] to-[#3A2E73] z-0"></div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `radial-gradient(#C0C4D6 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-[#F5F7FA] text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Previous <span className="text-[#50C4E6] inline-block relative">
            Events
            <span className="absolute -inset-1 blur-md bg-[#50C4E6]/20 -z-10 rounded-lg"></span>
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate component for each event card to manage its own loading state
function EventCard({ event, index }: { event: typeof pastEvents[0], index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-[#1A1D32]/60 backdrop-blur-sm rounded-xl overflow-hidden"
      style={{
        boxShadow: '0 8px 32px 0 rgba(26, 29, 50, 0.3)',
        border: '1px solid rgba(192, 196, 214, 0.05)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 12px 40px 0 rgba(102, 16, 242, 0.2)',
        border: '1px solid rgba(102, 16, 242, 0.2)'
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-56 bg-[#1A1D32]">
        {!imageError ? (
          <Image 
            src={event.thumbnail}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-105 blur-[1px]' : 'scale-100'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1A1D32]">
            <span className="text-[#B0B8C8]">Image unavailable</span>
          </div>
        )}
        
        {/* Dark overlay */}
        <div className={`absolute inset-0 bg-[#00000080] transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-50'}`}></div>
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="p-4 rounded-full bg-[#33C5E5]/10 backdrop-blur-md"
            whileHover={{ 
              scale: 1.2,
              boxShadow: '0 0 20px rgba(51, 197, 229, 0.5)'
            }} 
            whileTap={{ scale: 0.9 }}
          >
            <Play className="w-12 h-12 text-[#33C5E5] drop-shadow-[0_0_8px_rgba(51,197,229,0.8)]" />
          </motion.div>
        </div>
        
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-[#131528]/80 backdrop-blur-sm text-[#33C5E5] px-3 py-1 rounded-full text-sm border border-[#33C5E5]/20 flex items-center">
          <Clock className="w-3 h-3 mr-1 text-[#33C5E5]" />
          {event.duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-3 text-[#50C4E6]">{event.title}</h3>
        <div className="flex items-center justify-between text-[#B0B8C8]">
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1 text-[#B0B8C8]" />
            <span className="text-sm">{event.views} views</span>
          </div>
          <span className="text-sm text-[#C0C4D6]">{event.date}</span>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          boxShadow: 'inset 0 0 20px rgba(102, 16, 242, 0.3)',
          border: '1px solid rgba(102, 16, 242, 0.3)'
        }}
      ></div>
    </motion.div>
  );
}
