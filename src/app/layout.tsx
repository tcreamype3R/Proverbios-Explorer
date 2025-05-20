import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a common clean font
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Changed from Geist to Inter for broader appeal
});

export const metadata: Metadata = {
  title: 'Proverbs 1 Explorer', // Updated title
  description: 'Agente Educativo para Proverbios 1', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"> {/* Changed lang to Spanish */}
      <body className={`${inter.variable} font-sans antialiased`}> {/* Use Inter font */}
        {children}
        <Toaster /> {/* Added Toaster */}
      </body>
    </html>
  );
}
