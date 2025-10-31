'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProblemsSection from '@/components/ProblemsSection';
import FeaturedServices from '@/components/FeaturedServices';
import RecentPosts from '@/components/RecentPosts';
import ClientTestimonials from '@/components/ClientTestimonials';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <AboutSection />
            <ProblemsSection />
            <FeaturedServices />
            <RecentPosts />
            <ClientTestimonials />
        </div>
    );
}
