
import type { Metadata } from 'next';
import { Asap } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/layout/CookieConsent';
import Chatbot from '@/components/chat/Chatbot';
import { ReduxProvider } from '@/components/providers/ReduxProvider';

const asap = Asap({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-asap',
});

export const metadata: Metadata = {
  title: 'SBN Healthcare Solution - Expert in Healthcare Billing Services',
  description: 'Improving your financial performance aimed at reducing costs and increasing revenue.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={asap.variable}>
        <ReduxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
          <Chatbot />
        </ReduxProvider>
      </body>
    </html>
  );
}
