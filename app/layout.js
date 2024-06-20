"use client"
import React, { useState } from 'react';
import FixedNavbar from '@/components/FixedNavbar';
import SideNavbar from '@/components/SideNavbar';
import ThemeProvider from '../components/ThemeProvider';
import { AuthProvider } from '@/contexts/AuthContext';

export default function Layout({ children }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <html>
  
      <body>
      <AuthProvider>
        <ThemeProvider>
          <FixedNavbar onToggleSidebar={toggleSidebar} />
          <SideNavbar isOpen={isSidebarOpen} />
          {children}
        </ThemeProvider>
        </AuthProvider>
      </body>

    </html>
  );
}
