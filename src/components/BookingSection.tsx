
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="book-meeting" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-mms-darkgray">
              Schedule a Consultation
            </h2>
            <div className="flex items-start gap-4">
              <img 
                src="/lovable-uploads/63ab0c99-50d3-4a3b-ae90-22c1c6b4bb86.png"
                alt="Maalik Bomar" 
                className="w-32 h-32 rounded-full object-cover border-2 border-mms-blue"
              />
              <div>
                <h3 className="text-xl font-bold text-mms-darkgray">Maalik Bomar</h3>
                <p className="text-mms-blue font-medium">Regional Manager - Gardner Business Media</p>
                <p className="text-gray-600 mt-2">Cincinnati, Ohio, United States</p>
              </div>
            </div>
            <p className="text-gray-600">
              With extensive experience in media and advertising, Maalik helps manufacturing businesses 
              maximize their brand visibility and connect with qualified buyers.
            </p>
          </div>

          <div className="bg-mms-lightgray rounded-xl p-8 space-y-6">
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-mms-darkgray">Select Meeting Duration</h3>
              <p className="text-gray-600">Choose a time that works best for you</p>
            </div>
            
            <div className="space-y-4">
              <Button
                className="w-full bg-mms-red hover:bg-red-600 text-white h-auto py-4 text-lg"
                onClick={() => window.open("https://outlook.office.com/bookwithme/user/53c32e97b5e746c58b602472fc0486e1@GarPub.com/meetingtype/LfDQHgQD9kCwiwd2btB5zQ2?anonymous&ep=mLinkFromTile", "_blank")}
              >
                <Calendar className="mr-2" />
                Schedule 30-Minute Consultation
              </Button>
              
              <Button
                variant="outline"
                className="w-full border-mms-blue text-mms-blue hover:bg-mms-blue hover:text-white h-auto py-4 text-lg"
                onClick={() => window.open("https://outlook.office.com/bookwithme/user/53c32e97b5e746c58b602472fc0486e1@GarPub.com/meetingtype/bergIhsKGEqJaS74rhs8Qw2?anonymous&ep=mLinkFromTile", "_blank")}
              >
                <Calendar className="mr-2" />
                Schedule 15-Minute Quick Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
