'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface ServicePageTemplateProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  benefits: string[];
  process?: {
    title: string;
    steps: string[];
  };
  ctaText?: string;
  ctaLink?: string;
}

const ServicePageTemplate = ({
  title,
  description,
  imageUrl,
  features,
  benefits,
  process,
  ctaText = 'Book a Consultation',
  ctaLink = '/contact'
}: ServicePageTemplateProps) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl mb-8">{description}</p>
            <Link
              href={ctaLink}
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition duration-300"
            >
              {ctaText} <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">About {title}</h2>
                <p className="text-gray-700 mb-6">
                  {description}
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Benefits of {title}</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 text-3xl mb-4">
                  <FaCheckCircle />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {process && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">{process.title}</h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {process.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'ml-6 text-left' : 'mr-6 text-right'}`}>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Life with {title}?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book a consultation today and experience the positive changes in your life.
            </p>
            <Link
              href={ctaLink}
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition duration-300"
            >
              {ctaText} <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
