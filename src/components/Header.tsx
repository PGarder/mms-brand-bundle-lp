
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-32">
          <img 
            src="/lovable-uploads/03dd1c8d-e34a-42e3-8fff-47edac1ecdeb.png" 
            alt="Modern Machine Shop Logo" 
            className="w-full h-auto"
          />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-6">
              <li><a href="#benefits" className="text-mms-darkgray hover:text-mms-red text-lg font-bold">Benefits</a></li>
              <li><a href="#bundle-details" className="text-mms-darkgray hover:text-mms-red text-lg font-bold">Bundle Details</a></li>
              <li><a href="#pricing" className="text-mms-darkgray hover:text-mms-red text-lg font-bold">Pricing</a></li>
            </ul>
          </nav>
          <Button className="bg-mms-red hover:bg-red-600 text-white">Book Your Bundle</Button>
        </div>
        <Button className="md:hidden bg-mms-red hover:bg-red-600 text-white text-sm px-3 py-1">Contact</Button>
      </div>
    </header>
  );
};

export default Header;
