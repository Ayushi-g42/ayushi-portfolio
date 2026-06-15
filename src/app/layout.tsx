import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Ayushi Gothi | Senior Frontend Developer — React.js · Next.js · TypeScript',
  description:
    'Senior Frontend Developer with 5 years of experience building scalable, high-performance React.js 18 and Next.js 14 applications. Core Web Vitals optimizer, open-source NPM author (react-mobile-share), and engineering mentor at Unlink Technology.',
  keywords: [
    'Ayushi Gothi', 'Senior Frontend Developer', 'React Developer', 'Next.js Developer',
    'TypeScript Developer', 'UI Developer', 'React.js 18', 'Next.js 14',
    'Core Web Vitals', 'Frontend Engineer', 'SDE2', 'Noida', 'India', 'Portfolio',
    'react-mobile-share', 'NPM Package', 'Vue.js Developer',
  ],
  authors: [{ name: 'Ayushi Gothi' }],
  creator: 'Ayushi Gothi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ayushi Gothi — Senior Frontend Developer',
    description:
      '5 years building fast, scalable React.js & Next.js applications. Core Web Vitals optimizer & open-source NPM author.',
    siteName: 'Ayushi Gothi Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ayushi Gothi — Senior Frontend Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayushi Gothi — Senior Frontend Developer',
    description: '5 years building fast, scalable React.js & Next.js applications.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ayushi Gothi',
              jobTitle: 'Frontend Developer',
              url: 'https://ayushigothi.dev',
              email: 'ayushigothi012@gmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Noida', addressCountry: 'IN' },
              sameAs: [
                'https://www.linkedin.com/in/ayushi-gothi-a739a91a2',
                'https://github.com/ayushigothi',
              ],
              alumniOf: { '@type': 'CollegeOrUniversity', name: 'Vellore Institute of Technology, Bhopal' },
              knowsAbout: ['React.js', 'TypeScript', 'Next.js', 'JavaScript', 'Frontend Development'],
            }),
          }}
        />
      </head>
      <body className="dark:bg-dark-bg bg-light-bg antialiased">
        <ThemeProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
