import React, { ReactNode } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  return (
    <div className="theme-container min-h-screen">
      <Header />
      
      {/* Theme 2: Sidebar Layout */}
      {currentTheme === 'theme2' && <Sidebar />}
      
      {/* Main Content */}
      <main className={`${
        currentTheme === 'theme2' ? 'main-content' : ''
      } pt-header`}>
        <div className={`${
          currentTheme === 'theme1' ? 'container mx-auto px-4' :
          currentTheme === 'theme2' ? 'px-8' :
          'container mx-auto px-4'
        } theme-content`}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;