import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { THEMES, ThemeType } from '@/types/theme';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="theme-header fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-200">
            <Palette className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-foreground">ThemeForge</h1>
            <p className="text-xs text-muted-foreground">Multi-Theme Experience</p>
          </div>
        </Link>

        {/* Navigation - Theme 2 shows this in sidebar */}
        <nav className={`${currentTheme === 'theme2' ? 'hidden lg:flex' : 'flex'} items-center space-x-6`}>
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-secondary hover:text-secondary-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Theme Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <span className="hidden sm:inline">{THEMES[currentTheme].name}</span>
              <span className="sm:hidden">Theme</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            {Object.values(THEMES).map((theme) => (
              <DropdownMenuItem
                key={theme.id}
                onClick={() => setTheme(theme.id)}
                className={`flex flex-col items-start p-3 cursor-pointer ${
                  currentTheme === theme.id ? 'bg-accent' : ''
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium">{theme.name}</span>
                  {currentTheme === theme.id && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {theme.description}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;