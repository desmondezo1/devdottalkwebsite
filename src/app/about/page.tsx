"use client";

import { motion } from "framer-motion";
import { Users, Code, Calendar, MessageSquare, Heart, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative py-20 overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-[#F5F7FA]">About <span className="text-[#33C5E5]">dev.talk</span></h1>
          <p className="text-xl text-[#C0C4D6] max-w-3xl mx-auto">
            A community-driven monthly meetup for software engineers in Bournemouth.
            We bring together passionate developers to share knowledge, experiences, and ideas.
          </p>
        </motion.div>

        {/* Mission and What We Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg p-8"
            style={{
              boxShadow: '0 8px 32px 0 rgba(26, 29, 50, 0.3)'
            }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 12px 40px 0 rgba(51, 197, 229, 0.25)',
              borderColor: 'rgba(51, 197, 229, 0.2)'
            }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#33C5E5]/20 flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-[#33C5E5]" />
              </div>
              <h2 className="text-2xl font-bold text-[#F5F7FA]">Our Mission</h2>
            </div>
            <p className="text-[#C0C4D6] leading-relaxed">
              To foster a vibrant tech community in Bournemouth by providing a platform
              for developers to connect, learn, and grow together. We believe in the power
              of community-driven knowledge sharing and collaborative learning.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg p-8"
            style={{
              boxShadow: '0 8px 32px 0 rgba(26, 29, 50, 0.3)'
            }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 12px 40px 0 rgba(51, 197, 229, 0.25)',
              borderColor: 'rgba(51, 197, 229, 0.2)'
            }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#33C5E5]/20 flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-[#33C5E5]" />
              </div>
              <h2 className="text-2xl font-bold text-[#F5F7FA]">What We Do</h2>
            </div>
            <p className="text-[#C0C4D6] leading-relaxed">
              We organize monthly meetups featuring expert speakers, workshops,
              and networking opportunities for the local tech community. Our events
              cover a wide range of topics from web development to machine learning,
              DevOps, and more.
            </p>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#F5F7FA] text-center mb-10">Our <span className="text-[#33C5E5]">Values</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="w-6 h-6 text-[#33C5E5]" />, 
                title: "Community First", 
                description: "We prioritize building a welcoming, inclusive community where everyone feels valued and heard." 
              },
              { 
                icon: <MessageSquare className="w-6 h-6 text-[#33C5E5]" />, 
                title: "Knowledge Sharing", 
                description: "We believe in openly sharing knowledge, experiences, and best practices to help everyone grow." 
              },
              { 
                icon: <Calendar className="w-6 h-6 text-[#33C5E5]" />, 
                title: "Consistent Growth", 
                description: "We're committed to regular events and continuous improvement of our community offerings." 
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg p-6 text-center"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 12px 40px 0 rgba(51, 197, 229, 0.15)',
                }}
              >
                <div className="w-16 h-16 rounded-full bg-[#33C5E5]/10 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">{value.title}</h3>
                <p className="text-[#C0C4D6]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#F5F7FA] text-center mb-10">Our <span className="text-[#33C5E5]">Team</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Alex Johnson", 
                role: "Founder & Organizer",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=1470",
                twitter: "#",
                github: "#",
                linkedin: "#"
              },
              { 
                name: "Sarah Chen", 
                role: "Community Manager",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1522",
                twitter: "#",
                github: "#",
                linkedin: "#"
              },
              { 
                name: "Michael Rivera", 
                role: "Technical Lead",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1374",
                twitter: "#",
                github: "#",
                linkedin: "#"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg overflow-hidden"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 12px 40px 0 rgba(51, 197, 229, 0.25)',
                }}
              >
                <div className="h-64 relative">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D32]/90 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#F5F7FA] mb-1">{member.name}</h3>
                  <p className="text-[#33C5E5] mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.twitter} className="text-[#C0C4D6] hover:text-[#33C5E5] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                    <a href={member.github} className="text-[#C0C4D6] hover:text-[#33C5E5] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                    <a href={member.linkedin} className="text-[#C0C4D6] hover:text-[#33C5E5] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-gradient-to-br from-[#1D4ED8] to-[#2643E9] rounded-xl p-10 shadow-lg overflow-hidden relative"
          whileHover={{ 
            boxShadow: '0 20px 40px rgba(29, 78, 216, 0.3)'
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-[#33C5E5]"></div>
            <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-[#50C4E6]"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Whether you're a seasoned developer or just starting your journey, 
              dev.talk welcomes you. Join us at our next meetup and become part of 
              our growing community of passionate developers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/events"
                className="inline-flex items-center justify-center bg-[#FF6B35] hover:brightness-110 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Upcoming Events
              </motion.a>
              <motion.a
                href="https://discord.gg/devtalk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FFFFFF20] hover:bg-[#FFFFFF30] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Join Discord
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 