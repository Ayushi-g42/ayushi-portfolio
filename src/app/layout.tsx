import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Ayushi Gothi | Frontend Developer & React Specialist',
  description:
    'UI Specialist with 4.5+ years of expertise building scalable, high-performance React applications. SDE2 at Unlink Technology, open-source contributor, and author of the react-mobile-share NPM package.',
  keywords: [
    'Ayushi Gothi', 'Frontend Developer', 'React Developer', 'Next.js Developer',
    'TypeScript', 'UI Developer', 'React Specialist', 'Noida', 'India',
    'SDE2', 'Frontend Engineer', 'Portfolio',
  ],
  authors: [{ name: 'Ayushi Gothi' }],
  creator: 'Ayushi Gothi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ayushi Gothi — Frontend Developer & React Specialist',
    description:
      '4.5+ years building fast, scalable React applications. Author of react-mobile-share NPM package.',
    siteName: 'Ayushi Gothi Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ayushi Gothi — Frontend Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayushi Gothi — Frontend Developer',
    description: '4.5+ years building fast, scalable React applications.',
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
