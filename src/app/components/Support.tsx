"use client";

import { motion } from "framer-motion";
import { Coffee, Check } from "lucide-react";

export default function Support() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Support Information Section */}
        <motion.div 
          className="bg-gradient-to-br from-[#1D4ED8] to-[#2643E9] rounded-2xl p-8 md:p-12 text-[#F5F7FA] flex flex-col justify-center shadow-lg overflow-hidden relative" 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
            <h2 className="text-3xl font-bold mb-4">Support <span className="text-[#33C5E5]">dev.talk</span></h2>
            <p className="mb-8 text-lg opacity-90">
              Help us keep the community thriving! Buy us a coffee to support refreshments at our next meetup.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="bg-[#33C5E5]/30 rounded-full p-1.5 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#F5F7FA]" />
                </span>
                <span className="text-[#F5F7FA]">Support local tech community</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-[#33C5E5]/30 rounded-full p-1.5 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#F5F7FA]" />
                </span>
                <span className="text-[#F5F7FA]">Help provide refreshments</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-[#33C5E5]/30 rounded-full p-1.5 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#F5F7FA]" />
                </span>
                <span className="text-[#F5F7FA]">Enable better venues</span>
              </li>
            </ul>
            
            <motion.a 
              href="#coffee"
              className="inline-block bg-[#F5F7FA]/10 backdrop-blur-md border border-[#F5F7FA]/20 px-6 py-3 rounded-lg text-[#F5F7FA] font-semibold transition-all duration-300 hover:bg-[#F5F7FA]/20"
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 20px rgba(51, 197, 229, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Buy Us a Coffee Section */}
        <motion.div 
          id="coffee"
          className="bg-[#1A1D32] rounded-2xl p-8 md:p-12 shadow-xl flex flex-col justify-center relative overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: '0 20px 40px rgba(26, 29, 50, 0.4)'
          }}
        >
          {/* Subtle pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5 z-0"
            style={{
              backgroundImage: `radial-gradient(#F5F7FA 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          ></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-[#F5F7FA]">Buy us a <span className="text-[#FFB800]">Coffee</span></h2>
            <p className="text-[#C0C4D6] mb-8">
              Your support helps us keep the dev.talk community active and vibrant. Every contribution goes directly to making our events better.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.button 
                className="bg-[#FFFFFF10] backdrop-blur-md border border-[#FFFFFF10] p-5 rounded-lg text-center transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(51, 197, 229, 0.3)',
                  borderColor: 'rgba(51, 197, 229, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="font-bold text-[#33C5E5]">$5</p>
              </motion.button>
              <motion.button 
                className="bg-[#FFFFFF10] backdrop-blur-md border border-[#FFFFFF10] p-5 rounded-lg text-center transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255, 184, 0, 0.3)',
                  borderColor: 'rgba(255, 184, 0, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="font-bold text-[#FFB800]">$10</p>
              </motion.button>
              <motion.button 
                className="bg-[#FFFFFF10] backdrop-blur-md border border-[#FFFFFF10] p-5 rounded-lg text-center transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255, 61, 119, 0.3)',
                  borderColor: 'rgba(255, 61, 119, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="font-bold text-[#FF3D77]">$25</p>
              </motion.button>
            </div>
            
            <motion.button
              className="w-full bg-gradient-to-r from-[#22C55E] to-[#10B981] hover:brightness-110 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              style={{
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Coffee className="w-5 h-5" />
              Buy us a Coffee
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
