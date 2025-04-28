import React from 'react';
import { Factory, Target, TrendingUp, BarChart } from 'lucide-react';
const BenefitsSection = () => {
  return <section id="benefits" className="py-16 md:py-24 bg-mms-lightgray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-mms-darkgray mb-4">
            Benefits of the 2025 
            <span className="text-mms-blue"> Brand Awareness Bundle</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Modern Machine Shop's multi-channel approach delivers maximum exposure and value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-mms-blue/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-mms-blue" />
            </div>
            <h3 className="text-xl font-bold text-mms-darkgray mb-3">Extended Reach</h3>
            <p className="text-gray-600">
              Access a larger audience through our multi-channel approach that includes magazine, onsite, and offsite display advertising.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-mms-blue/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-mms-blue" />
            </div>
            <h3 className="text-xl font-bold text-mms-darkgray mb-3">High Impact</h3>
            <p className="text-gray-600">
              Be seen over time with this high-impact multi-month bundle that ensures consistent brand visibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-mms-red/10 rounded-lg flex items-center justify-center mb-4">
              <Factory className="w-6 h-6 text-mms-red" />
            </div>
            <h3 className="text-xl font-bold text-mms-darkgray mb-3">Cost Savings</h3>
            <p className="text-gray-600">
              Realize total savings of $17,208 when the display ads and marketing services are purchased separately.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-mms-red/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="w-6 h-6 text-mms-red" />
            </div>
            <h3 className="text-xl font-bold text-mms-darkgray mb-3">Analytics Access</h3>
            <p className="text-gray-600">
              Get access to our GROW™ analytics dashboard for comprehensive tracking of your campaign's performance.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="font-heading text-2xl font-bold text-mms-darkgray mb-6">
            Industry Insights
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="status-indicator red">
                <p className="text-lg font-semibold">90% of industrial buyers</p>
                <p className="text-gray-600">Are more likely to do business with vendors who actively market their business.</p>
              </div>

              <div className="status-indicator yellow">
                <p className="text-lg font-semibold">More than 65% of buyers</p>
                <p className="text-gray-600">Start a purchase process by conducting research to find new vendors or suppliers to work with.</p>
              </div>

              <div className="status-indicator green">
                <p className="text-lg font-semibold">Trusted industry sources</p>
                <p className="text-gray-600">Manufacturing professionals turn to websites, directories and magazines to find new vendors and suppliers.</p>
              </div>
            </div>

            <div className="bg-mms-darkgray text-white p-6 rounded-lg py-[45px]">
              
              
              
              <div className="border-t border-white/20 pt-4">
                <p className="italic text-xl text-center">"By working with MMS to establish a consistent presence across multiple channels, our company saw a 43% increase in qualified leads within just 3 months."</p>
                <p className="mt-2 font-semibold text-lg text-center">— Marketing Director, 
Precision Manufacturing Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;