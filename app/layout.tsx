import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from './components/Header/Header';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import './globals.css';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Webworks',
  description: 'Website solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <Hero/>
          <Footer></Footer>
          <ThemeToggle />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {children}
          </div>
      
        </ThemeProvider>
      </body>
    </html>
  );
}
