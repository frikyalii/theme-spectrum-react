import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Mail, Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Sidebar: React.FC = () => {
  const { currentTheme } = useTheme();
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Only show sidebar for theme2
  if (currentTheme !== 'theme2') return null;

  return (
    <aside className="sidebar pt-20">
      <div className="p-6">
        {/* Sidebar Logo */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-primary rounded-lg">
            <Palette className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">ThemeForge</h2>
            <p className="text-xs text-muted-foreground">Professional</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary hover:text-secondary-foreground'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-12 p-4 bg-secondary rounded-lg">
          <h3 className="text-sm font-semibold text-foreground mb-2">Dark Professional</h3>
          <p className="text-xs text-muted-foreground">
            Sophisticated design with elegant typography and refined spacing.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;