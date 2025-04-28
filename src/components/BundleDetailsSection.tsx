
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BundleDetailsSection = () => {
  return <section id="bundle-details" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-mms-darkgray mb-4">
            MMS <span className="text-mms-red">Brand Awareness Bundle</span> Includes:
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive, multi-channel marketing package designed specifically for manufacturing businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-mms-blue rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-mms-darkgray mb-2">Run-of-site web display ad package</h3>
                <p className="text-gray-600">90 days of high-visibility banner ads on Modern Machine Shop's website, targeting engaged manufacturing professionals.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-mms-blue rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-mms-darkgray mb-2">Offsite display retargeting campaign</h3>
                <p className="text-gray-600">90 days of targeted display ads that follow your prospects as they browse other industry websites, keeping your brand top-of-mind.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-mms-blue rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-mms-darkgray mb-2">1/2 Page magazine display advertisement</h3>
                <p className="text-gray-600">3x print and digital advertisements in Modern Machine Shop magazine, reaching qualified manufacturing professionals.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-mms-blue rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-mms-darkgray mb-2">Access to our GROW™ analytics dashboard</h3>
                <p className="text-gray-600">Comprehensive tracking and reporting tools to measure campaign performance and ROI in real-time.</p>
              </div>
            </div>
          </div>

          <div className="bg-mms-darkgray text-white rounded-lg p-8" id="pricing">
            <div className="text-center mb-8">
              <p className="text-xl mb-2">Bundle Investment</p>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold">$5,500</span>
                <span className="text-xl ml-2">/month</span>
              </div>
              <p className="text-mms-red font-medium mt-2">3 CONSECUTIVE MONTH MINIMUM</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Need design and creative for your ads?</h3>
              <p>We have an in-house creative team that can help you with comprehensive display advertising package.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Book Your Brand Awareness Bundle Today!</h3>
              <p className="text-lg">For more information about Modern Machine Shop Brand Awareness Bundle or to schedule a demo, ask your sales representative or contact our advertising manager.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="flex-1 bg-mms-red hover:bg-red-600 text-white">Book Your Bundle</Button>
                <Button className="flex-1 bg-white text-mms-darkgray hover:bg-mms-lightgray">Contact Sales</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default BundleDetailsSection;
