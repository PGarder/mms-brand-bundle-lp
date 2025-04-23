import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mms-darkgray text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/03dd1c8d-e34a-42e3-8fff-47edac1ecdeb.png" 
              alt="Modern Machine Shop Logo" 
              className="w-40 mb-4"
            />
            <p className="text-gray-300 mt-4">
              The leading publication for CNC machining shops and manufacturing professionals since 1928.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-mms-red" />
                <a href="tel:+15135279000" className="text-gray-300 hover:text-white">
                  (513) 527-9000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-mms-red" />
                <a href="mailto:info@mmsonline.com" className="text-gray-300 hover:text-white">
                  info@mmsonline.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-mms-red" />
                <address className="text-gray-300 not-italic">
                  6915 Valley Ave.<br />
                  Cincinnati, OH 45244
                </address>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#benefits" className="text-gray-300 hover:text-white">Benefits</a></li>
              <li><a href="#bundle-details" className="text-gray-300 hover:text-white">Bundle Details</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Sales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Modern Machine Shop</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Gardner Business Media, Inc. All Rights Reserved.</p>
          <p className="mt-2">Modern Machine Shop is a registered trademark of Gardner Business Media, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
