"use client";

import { useEffect, useState } from "react";
import { Calendar, MapPin, Ticket, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface EventbriteEvent {
  id: string;
  name: { text: string };
  description: { text: string };
  url: string;
  start: { local: string };
  logo?: { url: string };
}

export default function UpcomingEvents() {
  const [events, setEvents] = useState<EventbriteEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events");
        if (!response.ok) throw new Error("Failed to fetch events");

        const data = await response.json();
        setEvents(data);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching events");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // Format date to display in a more readable format
  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Format time to display in a more readable format
  const formatEventTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  if (loading) return (
    <div className="py-16 container mx-auto px-4 text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#33C5E5] border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <p className="mt-4 text-[#D0D8E7]">Loading upcoming events...</p>
    </div>
  );
  
  if (error) return (
    <div className="py-16 container mx-auto px-4 text-center">
      <p className="text-[#FF6B35] bg-[#FF6B35]/10 p-4 rounded-lg inline-block">
        {error}
      </p>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#102A43] via-[#1C3D5A] to-[#005F73] z-0"></div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `radial-gradient(#D0D8E7 1px, transparent 1px)`,
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
          Upcoming <span className="text-[#33C5E5] inline-block relative">
            Events
            <span className="absolute -inset-1 blur-md bg-[#33C5E5]/20 -z-10 rounded-lg"></span>
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={event.id} 
              className="bg-[#2A2E38]/20 backdrop-blur-lg rounded-xl border border-[#D0D8E7]/10 shadow-xl overflow-hidden"
              style={{
                boxShadow: '0 8px 32px 0 rgba(0, 95, 115, 0.2)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: '0 12px 40px 0 rgba(51, 197, 229, 0.25)'
              }}
            >
              {event.logo && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.logo.url}
                    alt={event.name.text}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 to-transparent"></div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#50C4E6]">{event.name.text}</h3>
                <p className="text-[#D0D8E7]/90 mb-4 line-clamp-2">{event.description.text}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-[#D0D8E7] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#33C5E5]" />
                    {formatEventDate(event.start.local)}
                  </p>
                  <p className="text-[#D0D8E7] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#33C5E5]" />
                    {formatEventTime(event.start.local)}
                  </p>
                </div>
                
                <motion.a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-4 py-3 rounded-lg text-center font-semibold transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 8px 20px rgba(255, 107, 53, 0.4), 0 0 0 2px rgba(255, 107, 53, 0.2)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Ticket className="w-5 h-5 inline-block mr-2" />
                  Register Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {events.length === 0 && (
          <div className="bg-[#2A2E38]/20 backdrop-blur-lg rounded-xl border border-[#D0D8E7]/10 p-8 text-center">
            <p className="text-[#D0D8E7] text-lg">No upcoming events at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
