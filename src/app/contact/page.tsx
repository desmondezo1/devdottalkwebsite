"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-[#F5F7FA]">Contact <span className="text-[#33C5E5]">Us</span></h1>
          <p className="text-xl text-[#C0C4D6] max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg p-8"
            style={{
              boxShadow: '0 8px 32px 0 rgba(26, 29, 50, 0.3)'
            }}
          >
            <h2 className="text-2xl font-bold text-[#F5F7FA] mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 text-[#33C5E5] mr-3" />
              Send us a message
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#C0C4D6] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-[#FFFFFF15] border border-[#FFFFFF20] rounded-lg py-3 px-4 text-[#F5F7FA] placeholder-[#C0C4D6]/70 focus:outline-none focus:ring-2 focus:ring-[#33C5E5]/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#C0C4D6] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-[#FFFFFF15] border border-[#FFFFFF20] rounded-lg py-3 px-4 text-[#F5F7FA] placeholder-[#C0C4D6]/70 focus:outline-none focus:ring-2 focus:ring-[#33C5E5]/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#C0C4D6] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-[#FFFFFF15] border border-[#FFFFFF20] rounded-lg py-3 px-4 text-[#F5F7FA] placeholder-[#C0C4D6]/70 focus:outline-none focus:ring-2 focus:ring-[#33C5E5]/50 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#C0C4D6] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full bg-[#FFFFFF15] border border-[#FFFFFF20] rounded-lg py-3 px-4 text-[#F5F7FA] placeholder-[#C0C4D6]/70 focus:outline-none focus:ring-2 focus:ring-[#33C5E5]/50 transition-all duration-300"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-6 rounded-lg font-medium text-white bg-[#33C5E5] hover:bg-[#50C4E6] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg p-8"
              style={{
                boxShadow: '0 8px 32px 0 rgba(26, 29, 50, 0.3)'
              }}
            >
              <h2 className="text-2xl font-bold text-[#F5F7FA] mb-6">Contact Info</h2>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#33C5E5]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#33C5E5]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F7FA] font-medium mb-1">Email</h3>
                    <a href="mailto:hello@devtalk.com" className="text-[#33C5E5] hover:text-[#50C4E6] transition-colors">
                      hello@devtalk.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#33C5E5]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#33C5E5]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F7FA] font-medium mb-1">Phone</h3>
                    <a href="tel:+441234567890" className="text-[#C0C4D6] hover:text-[#F5F7FA] transition-colors">
                      +44 (123) 456-7890
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#33C5E5]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#33C5E5]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F7FA] font-medium mb-1">Location</h3>
                    <p className="text-[#C0C4D6]">
                      Digital Hub<br />
                      Bournemouth, UK
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg p-8"
              style={{
                boxShadow: '0 8px 32px 0 rgba(26, 29, 50, 0.3)'
              }}
            >
              <h2 className="text-2xl font-bold text-[#F5F7FA] mb-6">Follow Us</h2>
              
              <div className="flex space-x-4">
                <motion.a 
                  href="https://twitter.com/devtalk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#FFFFFF15] flex items-center justify-center text-[#C0C4D6] hover:text-[#33C5E5] hover:bg-[#FFFFFF20] transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/devtalk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#FFFFFF15] flex items-center justify-center text-[#C0C4D6] hover:text-[#33C5E5] hover:bg-[#FFFFFF20] transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://linkedin.com/company/devtalk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#FFFFFF15] flex items-center justify-center text-[#C0C4D6] hover:text-[#33C5E5] hover:bg-[#FFFFFF20] transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://discord.gg/devtalk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#FFFFFF15] flex items-center justify-center text-[#C0C4D6] hover:text-[#33C5E5] hover:bg-[#FFFFFF20] transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg overflow-hidden h-96 mb-16"
          style={{
            boxShadow: '0 8px 32px 0 rgba(26, 29, 50, 0.3)'
          }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80715.52067602!2d-1.9546836672656248!3d50.7433035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873a1e4311511e7%3A0x1e1ed7a8f325a8f0!2sBournemouth!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="dev.talk location"
            className="filter grayscale brightness-75 contrast-125"
          ></iframe>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#F5F7FA] text-center mb-10">Frequently Asked <span className="text-[#33C5E5]">Questions</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                question: "How can I join dev.talk events?", 
                answer: "You can join our events by registering through our website or following us on social media for announcements. All events are listed on our Events page with registration links." 
              },
              { 
                question: "Can I propose a talk or workshop?", 
                answer: "Absolutely! We're always looking for speakers. Fill out the form on this page or email us directly with your talk proposal, and our team will get back to you." 
              },
              { 
                question: "Are the events free to attend?", 
                answer: "Yes, most of our regular meetups are free to attend. Special workshops or conferences might have a nominal fee to cover costs." 
              },
              { 
                question: "How can I sponsor dev.talk?", 
                answer: "We offer various sponsorship packages for companies interested in supporting our community. Please contact us through this form for more information." 
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg p-6"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 12px 40px 0 rgba(51, 197, 229, 0.15)',
                }}
              >
                <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">{faq.question}</h3>
                <p className="text-[#C0C4D6]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 