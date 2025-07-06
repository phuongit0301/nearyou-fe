import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-grey-100">
      <Navbar />
      
      {/* Header Section */}
      {title && (
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-dark-grey-900 mb-4 lg:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-grey-700 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-dark-grey-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-grey-400">
              © 2025 nearyou.social. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}; 