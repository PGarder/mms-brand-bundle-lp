
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import BundleDetailsSection from '@/components/BundleDetailsSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  const scrollToBooking = () => {
    document.getElementById('book-meeting')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />

      <div className="bg-mms-blue py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <p className="text-xl font-semibold">Ready to elevate your manufacturing brand's visibility?</p>
            <Button 
              className="bg-mms-red hover:bg-red-600 text-white"
              onClick={scrollToBooking}
            >
              Book Your Bundle Now
            </Button>
          </div>
        </div>
      </div>

      <BenefitsSection />
      <BundleDetailsSection />

      <div className="bg-mms-red py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Take Your Brand to the Next Level
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join manufacturing leaders who trust Modern Machine Shop to deliver results through targeted, multi-channel marketing campaigns.
          </p>
          <Button 
            variant="white" 
            className="text-lg py-6 px-10"
            onClick={scrollToBooking}
          >
            Book Your Brand Awareness Bundle
          </Button>
        </div>
      </div>

      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
