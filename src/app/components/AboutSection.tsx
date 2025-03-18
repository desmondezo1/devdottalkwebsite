"use client";

import { Heart, MessageCircle, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const features = [
    {
      icon: <Heart className="h-12 w-12 text-[#33C5E5] filter drop-shadow-[0_0_8px_rgba(51,197,229,0.6)]" />,
      title: "Community Driven",
      description: "Built by and for the local tech community"
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-[#33C5E5] filter drop-shadow-[0_0_8px_rgba(51,197,229,0.6)]" />,
      title: "Knowledge Sharing",
      description: "Learn from peers and industry experts"
    },
    {
      icon: <Youtube className="h-12 w-12 text-[#33C5E5] filter drop-shadow-[0_0_8px_rgba(51,197,229,0.6)]" />,
      title: "Recorded Sessions",
      description: "Access talks on our YouTube channel"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF] to-[#3A2E73] z-0"></div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `radial-gradient(#F5F7FA 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#F5F7FA]">
            What is <span className="text-[#50C4E6] inline-block relative">
              {'{dev.talk}'}
              <span className="absolute -inset-1 blur-md bg-[#50C4E6]/20 -z-10 rounded-lg"></span>
            </span>?
          </h2>
          <p className="text-xl text-[#F5F7FA]/90 mb-16 leading-relaxed">
            Free to attend and run by community volunteers, we create an inclusive space where
            developers of all experience levels can learn, share knowledge, and connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 rounded-xl bg-[#D0D8E7]/10 backdrop-blur-lg border border-[#F5F7FA]/10 shadow-xl"
              style={{
                boxShadow: '0 8px 32px 0 rgba(27, 29, 54, 0.3)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: '0 12px 40px 0 rgba(51, 197, 229, 0.2)',
                borderColor: 'rgba(51, 197, 229, 0.3)'
              }}
            >
              <div className="flex justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#50C4E6]">{feature.title}</h3>
              <p className="text-[#F5F7FA]/80 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 