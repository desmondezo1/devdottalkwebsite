"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function SponsorsPage() {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#102A43] via-[#1A1D32] to-[#1E1E3F] z-0"></div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `radial-gradient(#F5F7FA 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-[#F5F7FA] mb-4">Our <span className="text-[#33C5E5]">Sponsors</span></h1>
          <p className="text-xl text-[#C0C4D6] max-w-3xl mx-auto mb-12">
            We're grateful to have amazing sponsors who support our community
          </p>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Example sponsor cards - replace with actual sponsors */}
            {[1, 2, 3].map((index) => (
              <motion.div 
                key={index}
                className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] p-8 rounded-xl shadow-lg text-center overflow-hidden relative"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(26, 29, 50, 0.3)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 12px 40px 0 rgba(51, 197, 229, 0.25)',
                  borderColor: 'rgba(51, 197, 229, 0.2)'
                }}
              >
                <div className="absolute -right-10 -top-10 w-20 h-20 rounded-full bg-[#33C5E5]/10"></div>
                <div className="absolute -left-10 -bottom-10 w-20 h-20 rounded-full bg-[#50C4E6]/10"></div>
                
                <div className="relative z-10">
                  <div className="h-24 flex items-center justify-center mb-6">
                    <div className="w-24 h-24 bg-[#33C5E5]/20 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-[#1A1D32] rounded-full flex items-center justify-center text-[#33C5E5] text-2xl font-bold">
                        S{index}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#50C4E6] mb-2">Sponsor Name</h3>
                  <p className="mt-2 text-[#C0C4D6]">Supporting our community since 2024</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 text-center bg-gradient-to-br from-[#1D4ED8] to-[#2643E9] rounded-2xl p-10 shadow-lg overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ 
            boxShadow: '0 20px 40px rgba(29, 78, 216, 0.3)'
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#33C5E5]"></div>
            <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-[#50C4E6]"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">Become a <span className="text-[#33C5E5]">Sponsor</span></h2>
            <p className="text-[#F5F7FA]/90 mb-8 max-w-2xl mx-auto">
              Interested in supporting our community? We'd love to hear from you!
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#FF6B35] hover:brightness-110 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg gap-2"
                style={{
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
                }}
              >
                <Sparkles className="w-5 h-5" />
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 