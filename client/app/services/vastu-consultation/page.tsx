'use client';

import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaMapMarkerAlt, FaRuler, FaTools, FaPhone, FaEnvelope, FaMapMarkerAlt as FaLocation, FaCheckCircle, FaStar, FaCompass, FaFileAlt, FaHandsHelping } from 'react-icons/fa';

const VastuConsultationPage = () => {
  const services = [
    {
      icon: FaHome,
      title: "Residential Vastu Consultation",
      description: "Transform your home into a harmonious living space with our comprehensive residential Vastu analysis.",
      features: ["Complete home analysis", "Room-by-room assessment", "Energy flow optimization", "Remedial solutions"]
    },
    {
      icon: FaBuilding,
      title: "Commercial Vastu Analysis",
      description: "Enhance your business prosperity with our expert commercial property Vastu consultation.",
      features: ["Office space optimization", "Business growth enhancement", "Employee productivity improvement", "Financial prosperity guidance"]
    },
    {
      icon: FaMapMarkerAlt,
      title: "Land Selection & Evaluation",
      description: "Choose the perfect plot for your dream home or business with our land evaluation services.",
      features: ["Plot analysis", "Direction assessment", "Soil quality evaluation", "Construction guidance"]
    },
    {
      icon: FaRuler,
      title: "Interior Design & Space Planning",
      description: "Optimize your interior spaces according to Vastu principles for maximum positive energy.",
      features: ["Furniture placement", "Color scheme selection", "Lighting optimization", "Space utilization"]
    }
  ];

  const benefits = [
    {
      icon: FaStar,
      title: "Enhanced Positive Energy",
      description: "Create a harmonious environment that promotes positive energy flow throughout your space."
    },
    {
      icon: FaCheckCircle,
      title: "Improved Health & Relationships",
      description: "Experience better health, stronger relationships, and overall well-being in your Vastu-compliant space."
    },
    {
      icon: FaBuilding,
      title: "Business Prosperity",
      description: "Boost your business success with proper Vastu implementation in your commercial spaces."
    },
    {
      icon: FaHome,
      title: "Property Value Increase",
      description: "Increase the value and appeal of your property with proper Vastu compliance."
    }
  ];

  const processSteps = [
    {
      icon: FaPhone,
      title: "Initial Consultation",
      description: "We discuss your requirements, concerns, and goals for the Vastu consultation."
    },
    {
      icon: FaCompass,
      title: "Site Visit & Analysis",
      description: "Comprehensive on-site analysis including compass readings and energy mapping."
    },
    {
      icon: FaFileAlt,
      title: "Detailed Report",
      description: "Receive a comprehensive report with findings, recommendations, and implementation guide."
    },
    {
      icon: FaHandsHelping,
      title: "Implementation Support",
      description: "Ongoing guidance and support for implementing the recommended Vastu solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching About/Membership/Contact Style */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
        {/* Background Elements - Similar to original */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-700/20 to-red-600/20"></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Vastu Consultation Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Transform your living and working spaces with our expert Vastu consultation services. Achieve harmony, prosperity, and positive energy flow in your environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Our Vastu Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Vastu consultation services for residential, commercial, and industrial properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <FaCheckCircle className="text-red-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-red-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Benefits of Vastu Consultation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the transformative power of proper Vastu implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Our Vastu Consultation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure comprehensive Vastu analysis and implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="text-white text-2xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-red-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Book your Vastu consultation today and experience the positive changes in your life and environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-lg font-semibold text-red-600">+91 70692 00777</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-lg font-semibold text-red-600">vastuscienceworld@gmail.com</p>
                <p className="text-sm text-gray-600">We respond within 24 hours</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <FaLocation className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-lg font-semibold text-red-600">Ahmedabad, India</p>
                <p className="text-sm text-gray-600">Serving worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VastuConsultationPage;
