'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  image: string;
  children: ReactNode;
  ctaText?: string;
  ctaLink?: string;
  bgGradient?: string;
  featuredServices?: Array<{
    title: string;
    description: string;
    icon: string;
    link: string;
  }>;
}

const ServicePageLayout = ({
  title,
  description,
  image,
  children,
  ctaText = 'Book a Consultation',
  ctaLink = '/contact',
  bgGradient = 'from-indigo-900 via-purple-900 to-blue-900',
  featuredServices = []
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative py-24 ${bgGradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center">
            <div className="md:w-1/2 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  {description}
                </p>
                <Link
                  href={ctaLink}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  {ctaText} <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-service.jpg';
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {featuredServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Services</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 text-white flex items-center justify-center text-2xl mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200 text-sm"
                    >
                      Learn more <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Experience the transformative power of our {title.toLowerCase()} services today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
