import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Vastu Science World - India\'s First Scientific Paranormal Vastu Consultant',
    description: 'Professional Vastu consultation services for residential, corporate, and industrial properties. Expert guidance in Vastu, Astrology, and Numerology.',
    keywords: 'vastu, astrology, numerology, consultation, paranormal vastu, dr ketan talsaniya',
    authors: [{ name: 'Vastu Science World' }],
    openGraph: {
        title: 'Vastu Science World - Scientific Vastu Consultation',
        description: 'Professional Vastu consultation services for residential, corporate, and industrial properties.',
        type: 'website',
        locale: 'en_US',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <Toaster position="top-right" />
            </body>
        </html>
    )
}
