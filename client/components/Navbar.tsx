'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch, FaChevronDown, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        {
            name: 'Services',
            href: '/services',
            submenu: [
                { name: 'Vastu Consultation', href: '/service-category/vastu' },
                { name: 'Astrology', href: '/service-category/astrology' },
                { name: 'Numerology', href: '/service-category/numerology' },
                { name: 'Education', href: '/service-category/education' },
            ]
        },
        { name: 'Awards & Achievements', href: '/awards-achievements' },
        { name: 'News', href: '/news' },
        { name: 'Workshop & Seminar', href: '/workshop-seminar' },
        { name: 'Membership', href: '/membership' },
        {
            name: 'Contact Us',
            href: '/contact',
            submenu: [
                { name: 'Send a Message', href: '/contact' },
                { name: 'Confirmation Form', href: '/terms-and-conditions' },
            ]
        },
    ];

    return (
        <>
            {/* Top Welcome Bar */}
            <div className="bg-red-600 text-white py-2">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                        <div className="flex items-center mb-2 sm:mb-0">
                            <span className="font-medium">Welcome to Vastu Science World</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <span>English</span>
                                <FaChevronDown className="text-xs" />
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaFacebook className="text-sm hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                                <FaLinkedin className="text-sm hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                                <FaInstagram className="text-sm hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                                <FaYoutube className="text-sm hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                            </div>
                            <FaSearch className="text-sm hover:text-yellow-300 transition-colors duration-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''
                }`}>
                <div className="container-custom">
                    {/* Logo and Contact Info */}
                    <div className="flex flex-col lg:flex-row justify-between items-center py-6">
                        {/* Logo Section */}
                        <div className="flex items-center mb-4 lg:mb-0">
                            <div className="text-center lg:text-left">
                                <div className="text-sm text-gray-600 mb-1">Since - 1999</div>
                                <div className="flex items-center">
                                    <h1 className="text-3xl font-bold">
                                        <span className="text-red-600">VASTU</span>{' '}
                                        <span className="text-blue-600">SCIENCE</span>{' '}
                                        <span className="text-red-600">WORLD</span>
                                        <span className="text-xs text-gray-500 ml-1">®</span>
                                    </h1>
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                    Scientific Ritual Spiritual
                                </div>
                                <div className="text-xs text-red-600">
                                    A Gateway to Vaastu
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <FaPhone className="text-red-600" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-gray-900">+91 70692 00777</div>
                                    <div className="text-sm text-gray-600">CALL US NOW</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <FaEnvelope className="text-red-600" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-gray-900">vastuscienceworld@gmail.com</div>
                                    <div className="text-sm text-gray-600">SEND A MESSAGE</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="border-t border-gray-200">
                        <div className="flex flex-col lg:flex-row justify-between items-center py-4">
                            {/* Navigation Links */}
                            <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-8 mb-4 lg:mb-0">
                                {navItems.map((item) => (
                                    <div key={item.name} className="relative group">
                                        <Link
                                            href={item.href}
                                            className={`flex items-center space-x-1 py-2 px-3 font-medium transition-colors duration-300 ${pathname === item.href
                                                ? 'text-red-600 border-b-2 border-red-600'
                                                : 'text-gray-700 hover:text-red-600'
                                                }`}
                                        >
                                            <span>{item.name}</span>
                                            {item.submenu && <FaChevronDown className="text-xs" />}
                                        </Link>

                                        {/* Submenu */}
                                        {item.submenu && (
                                            <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                                <div className="py-2">
                                                    {item.submenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Search Button */}
                            <div className="flex items-center">
                                <button className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                                    <FaSearch className="text-sm" />
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-lg border-t">
                    <div className="container-custom py-4">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className="block py-3 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.submenu && (
                                    <div className="ml-4">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block py-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;