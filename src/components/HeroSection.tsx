import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="gradient-bg text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
              Build Your Brand and Condition Buyers
              <span className="block text-mms-red mt-2">2025 Brand Awareness Bundle</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Reach an audience of qualified, active CNC machining shops and manufacturing professionals with high impact brand impressions across multiple content consumption channels.
            </p>
            <div className="bg-mms-red px-5 py-4 rounded-lg inline-block">
              <p className="text-lg font-semibold">Bundle Savings: $5,736 average per month</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-mms-red hover:bg-red-600 text-white text-lg py-6 px-8">
                Book Your Bundle
              </Button>
              <Button variant="outline" className="border-white text-mms-darkgray hover:bg-white hover:text-mms-darkgray text-lg py-6 px-8">
                Request a Demo
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-mms-blue rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 mms-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-mms-red flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl">Multi-Channel Approach</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-mms-red mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Web display ad package (90 days)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-mms-red mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Offsite display retargeting (90 days)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-mms-red mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Magazine display advertisements (3x print)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-mms-red mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Analytics dashboard/ad tracker</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
