"use client";

import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Building Resilient Microservices with Node.js',
      excerpt: 'Learn how to design and implement fault-tolerant microservices that can handle failures gracefully and maintain system stability.',
      author: 'Alex Rivera',
      date: 'March 5, 2025',
      category: 'Backend Development',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070',
    },
    {
      id: 2,
      title: 'Effective State Management in React Applications',
      excerpt: 'A comparison of different state management approaches in React and when to use each one for optimal performance and maintainability.',
      author: 'Jordan Chen',
      date: 'February 20, 2025',
      category: 'Frontend Development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070',
    },
    {
      id: 3,
      title: 'Implementing CI/CD Pipelines for Developer Happiness',
      excerpt: 'How continuous integration and deployment can improve developer experience and lead to higher quality software.',
      author: 'Sam Taylor',
      date: 'February 12, 2025',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=2070',
    },
    {
      id: 4,
      title: 'Machine Learning for Software Engineers',
      excerpt: 'A practical introduction to ML concepts for developers who want to add AI capabilities to their applications.',
      author: 'Maya Johnson',
      date: 'January 30, 2025',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2070',
    },
    {
      id: 5,
      title: 'Advanced TypeScript Patterns for Robust Code',
      excerpt: 'Deep dive into TypeScript features that help catch bugs early and improve code quality through strong typing.',
      author: 'Chris Nolan',
      date: 'January 18, 2025',
      category: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=2070',
    },
    {
      id: 6,
      title: 'Building Accessible Web Applications',
      excerpt: 'Why accessibility matters and how to ensure your web apps can be used by everyone regardless of abilities.',
      author: 'Leila Patel',
      date: 'January 5, 2025',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=2070',
    },
  ];

  // Get all unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

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
          <h1 className="text-4xl font-bold mb-4 text-[#F5F7FA]">Our <span className="text-[#33C5E5]">Blog</span></h1>
          <p className="text-xl text-[#C0C4D6] max-w-3xl mx-auto">
            Insights, tutorials, and stories from the dev.talk community
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="lg:w-3/4">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg overflow-hidden"
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(26, 29, 50, 0.3)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 12px 40px 0 rgba(51, 197, 229, 0.25)',
                    borderColor: 'rgba(51, 197, 229, 0.2)'
                  }}
                >
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D32]/80 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#33C5E5]/20 text-[#33C5E5] backdrop-blur-md border border-[#33C5E5]/20">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 text-[#50C4E6]">{post.title}</h2>
                    <p className="text-[#C0C4D6] mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap justify-between text-sm text-[#B0B8C8] mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1 text-[#33C5E5]" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-[#33C5E5]" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-[#33C5E5] hover:text-[#50C4E6] font-medium inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="inline-flex rounded-lg overflow-hidden backdrop-blur-md">
                <button className="py-2 px-4 bg-[#33C5E5] text-white font-medium">1</button>
                <button className="py-2 px-4 bg-[#FFFFFF10] text-[#C0C4D6] hover:bg-[#FFFFFF20] transition-colors">2</button>
                <button className="py-2 px-4 bg-[#FFFFFF10] text-[#C0C4D6] hover:bg-[#FFFFFF20] transition-colors">3</button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            {/* Search box */}
            <motion.div 
              className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-[#FFFFFF10] border border-[#FFFFFF20] rounded-lg py-2 pl-4 pr-10 text-[#F5F7FA] placeholder-[#C0C4D6]/70 focus:outline-none focus:ring-2 focus:ring-[#33C5E5]/50"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-[#33C5E5]" />
              </div>
            </motion.div>
            
            {/* Categories */}
            <motion.div 
              className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-4 text-[#F5F7FA]">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`} 
                      className="text-[#C0C4D6] hover:text-[#33C5E5] transition-colors flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#33C5E5] mr-2"></span>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Popular Posts */}
            <motion.div 
              className="bg-[#FFFFFF10] backdrop-blur-lg border border-[#FFFFFF10] rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold mb-4 text-[#F5F7FA]">Popular Posts</h3>
              <ul className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.id} className="border-b border-[#FFFFFF10] pb-4 last:border-0 last:pb-0">
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="text-[#50C4E6] hover:text-[#33C5E5] transition-colors font-medium"
                    >
                      {post.title}
                    </Link>
                    <div className="flex items-center text-xs text-[#B0B8C8] mt-1">
                      <Calendar className="w-3 h-3 mr-1 text-[#33C5E5]" />
                      <span>{post.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Newsletter */}
            <motion.div 
              className="bg-gradient-to-br from-[#1D4ED8] to-[#2643E9] rounded-xl p-6 shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ 
                boxShadow: '0 20px 40px rgba(29, 78, 216, 0.3)'
              }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-10 -top-10 w-20 h-20 rounded-full bg-[#33C5E5]"></div>
                <div className="absolute -left-10 -bottom-10 w-20 h-20 rounded-full bg-[#50C4E6]"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-3 text-[#F5F7FA]">Newsletter</h3>
                <p className="text-sm text-[#F5F7FA]/90 mb-4">
                  Subscribe to get the latest articles and updates.
                </p>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-[#FFFFFF20] border border-[#FFFFFF20] rounded-lg py-2 px-4 text-[#F5F7FA] placeholder-[#F5F7FA]/70 mb-3 focus:outline-none focus:ring-2 focus:ring-[#33C5E5]/50"
                />
                <motion.button
                  className="w-full bg-[#FF6B35] hover:brightness-110 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}