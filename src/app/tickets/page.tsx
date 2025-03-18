"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Check } from "lucide-react";
import { useState } from "react";

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  // Sample upcoming event
  const event = {
    title: "Next dev.talk Meetup",
    date: "April 24, 2025",
    time: "6:30 PM - 9:00 PM",
    location: "TechHub Bournemouth",
    address: "123 Digital Avenue, Bournemouth, BH1 2AB",
    description: "Join us for an evening of tech talks, networking, and refreshments. This month we'll be discussing modern web development practices and tools.",
    ticketTypes: [
      {
        id: "standard",
        name: "Standard",
        price: "Free",
        benefits: [
          "Access to all talks",
          "Networking opportunities",
          "Refreshments included"
        ]
      },
      {
        id: "priority",
        name: "Priority",
        price: "£5",
        benefits: [
          "Access to all talks",
          "Networking opportunities",
          "Refreshments included",
          "Reserved seating",
          "Priority Q&A access"
        ]
      },
      {
        id: "supporter",
        name: "Supporter",
        price: "£15",
        benefits: [
          "Access to all talks",
          "Networking opportunities",
          "Refreshments included",
          "Reserved seating",
          "Priority Q&A access",
          "Event t-shirt",
          "Community supporter recognition"
        ]
      }
    ]
  };

  return (
    <main className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Get Your Ticket</h1>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl">
            Secure your spot at our next dev.talk event. Choose the ticket option 
            that best suits you and join our community of tech professionals.
          </p>

          {/* Event Details Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                <p className="text-gray-600 mb-6">{event.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                    <span>{event.location} - {event.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Limited capacity - 80 attendees</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Event Schedule</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-500 w-24">6:30 PM</span>
                    <span>Doors open & Networking</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24">7:00 PM</span>
                    <span>Welcome & Intro</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24">7:15 PM</span>
                    <span>Talk 1: Modern Web Dev</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24">7:45 PM</span>
                    <span>Break & Refreshments</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24">8:00 PM</span>
                    <span>Talk 2: Tools & Practices</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24">8:30 PM</span>
                    <span>Q&A Panel</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24">9:00 PM</span>
                    <span>Networking & Close</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ticket Selection */}
          <h2 className="text-2xl font-bold mb-6">Select Your Ticket</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {event.ticketTypes.map((ticket) => (
              <motion.div
                key={ticket.id}
                className={`bg-white rounded-xl shadow-md overflow-hidden border-2 ${
                  selectedTicket === ticket.id ? 'border-blue-500' : 'border-transparent'
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedTicket(ticket.id)}
              >
                <div className={`p-4 text-white text-center ${
                  ticket.id === 'standard' ? 'bg-gray-500' : 
                  ticket.id === 'priority' ? 'bg-blue-500' : 'bg-indigo-600'
                }`}>
                  <h3 className="text-xl font-bold">{ticket.name}</h3>
                  <p className="text-2xl font-bold mt-2">{ticket.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {ticket.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className={`w-5 h-5 mr-2 mt-0.5 ${
                          ticket.id === 'standard' ? 'text-gray-500' : 
                          ticket.id === 'priority' ? 'text-blue-500' : 'text-indigo-600'
                        }`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    className={`w-full py-2 px-4 rounded-lg text-white font-bold ${
                      ticket.id === 'standard' ? 'bg-gray-500 hover:bg-gray-600' : 
                      ticket.id === 'priority' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Select Ticket
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Registration Form */}
          {selectedTicket && (
            <motion.div
              className="bg-blue-50 rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Registration Information</h2>
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-1">Dietary Restrictions (Optional)</label>
                  <input 
                    type="text" 
                    id="dietaryRestrictions" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>I agree to receive communications about dev.talk events</span>
                  </label>
                </div>
                <div className="md:col-span-2">
                  <motion.button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Complete Registration
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}