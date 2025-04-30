
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import BundleDetailsSection from '@/components/BundleDetailsSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { trackButtonClick, trackPageView } from '@/utils/analytics';

const Index = () => {
  useEffect(() => {
    // Track page view when component mounts
    trackPageView('Home');
  }, []);

  const scrollToBooking = () => {
    document.getElementById('book-meeting')?.scrollIntoView({ behavior: 'smooth' });
    trackButtonClick('Book Your Bundle Now', 'Mid Page CTA');
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <HeroSection />

      <div className="bg-mms-blue py-8 sm:py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <p className="text-lg sm:text-xl font-semibold">Ready to elevate your manufacturing brand's visibility?</p>
            <Button 
              className="bg-mms-red hover:bg-red-600 text-white w-full md:w-auto"
              onClick={scrollToBooking}
            >
              Book Your Bundle Now
            </Button>
          </div>
        </div>
      </div>

      <BenefitsSection />
      <BundleDetailsSection />

      <div className="bg-mms-red py-12 sm:py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Take Your Brand to the Next Level
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
            Join manufacturing leaders who trust Modern Machine Shop to deliver results through targeted, multi-channel marketing campaigns.
          </p>
          <Button 
            variant="white" 
            className="text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-10"
            onClick={() => {
              scrollToBooking();
              trackButtonClick('Book Your Brand Awareness Bundle', 'Bottom CTA');
            }}
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
