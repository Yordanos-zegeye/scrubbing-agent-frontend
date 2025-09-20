import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mini RCM Validation Engine',
  description: 'Validate and analyze claims',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <Link href="/" className="logo">
              <h2>RCM Validator</h2>
            </Link>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
