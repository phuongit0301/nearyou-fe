import React from 'react';

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-main p-8 lg:p-12 max-w-4xl mx-auto ${className}`}>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </div>
  );
}; 