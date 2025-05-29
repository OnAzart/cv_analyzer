import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;