
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { trackButtonClick } from '@/utils/analytics';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToBooking = () => {
    document.getElementById('book-meeting')?.scrollIntoView({ behavior: 'smooth' });
    trackButtonClick('Book Your Bundle', 'Header');
    setMenuOpen(false);
  };

  const handleNavClick = (target: string, label: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    trackButtonClick(label, 'Header Navigation');
    setMenuOpen(false);
  };

  return (
    <header className="bg-white py-3 sm:py-4 px-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-24 sm:w-32">
          <img 
            src="/lovable-uploads/03dd1c8d-e34a-42e3-8fff-47edac1ecdeb.png" 
            alt="Modern Machine Shop Logo" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-6">
              <li><a href="#benefits" onClick={() => handleNavClick('benefits', 'Benefits')} className="text-mms-darkgray hover:text-mms-red text-lg font-bold">Benefits</a></li>
              <li><a href="#bundle-details" onClick={() => handleNavClick('bundle-details', 'Bundle Details')} className="text-mms-darkgray hover:text-mms-red text-lg font-bold">Bundle Details</a></li>
              <li><a href="#pricing" onClick={() => handleNavClick('pricing', 'Pricing')} className="text-mms-darkgray hover:text-mms-red text-lg font-bold">Pricing</a></li>
            </ul>
          </nav>
          <Button 
            className="bg-mms-red hover:bg-red-600 text-white"
            onClick={scrollToBooking}
          >
            Book Your Bundle
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button 
            className="bg-mms-red hover:bg-red-600 text-white mr-2 text-sm px-3 py-1"
            onClick={scrollToBooking}
          >
            Contact
          </Button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 focus:outline-none"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 shadow-md py-4 px-4">
            <nav>
              <ul className="space-y-3">
                <li><a href="#benefits" onClick={() => handleNavClick('benefits', 'Benefits')} className="text-mms-darkgray hover:text-mms-red text-lg font-bold block py-1">Benefits</a></li>
                <li><a href="#bundle-details" onClick={() => handleNavClick('bundle-details', 'Bundle Details')} className="text-mms-darkgray hover:text-mms-red text-lg font-bold block py-1">Bundle Details</a></li>
                <li><a href="#pricing" onClick={() => handleNavClick('pricing', 'Pricing')} className="text-mms-darkgray hover:text-mms-red text-lg font-bold block py-1">Pricing</a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
