
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { trackButtonClick } from '@/utils/analytics';

const BookingSection = () => {
  const handleBookingClick = (duration: string) => {
    let url = '';
    if (duration === '30min') {
      url = "https://outlook.office.com/bookwithme/user/53c32e97b5e746c58b602472fc0486e1@GarPub.com/meetingtype/LfDQHgQD9kCwiwd2btB5zQ2?anonymous&ep=mLinkFromTile";
      trackButtonClick('Schedule 30-Minute Consultation', 'Booking Section');
    } else {
      url = "https://outlook.office.com/bookwithme/user/53c32e97b5e746c58b602472fc0486e1@GarPub.com/meetingtype/bergIhsKGEqJaS74rhs8Qw2?anonymous&ep=mLinkFromTile";
      trackButtonClick('Schedule 15-Minute Quick Chat', 'Booking Section');
    }
    window.open(url, "_blank");
  };

  return <section id="book-meeting" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-mms-darkgray">Book Your Brand Bundle</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img src="/lovable-uploads/edaa5036-fe7e-49f3-b4bc-1422717d26ce.png" alt="Maalik Bomar" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-mms-blue" />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-mms-darkgray">Maalik Bomar</h3>
                <p className="text-mms-blue font-medium">Regional Manager - Gardner Business Media</p>
                <p className="text-gray-600 mt-2">Cincinnati, Ohio, United States</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              With extensive experience in media and advertising, Maalik helps manufacturing businesses 
              maximize their brand visibility and connect with qualified buyers.
            </p>
          </div>

          <div className="bg-mms-lightgray rounded-xl p-4 sm:p-8 space-y-6">
            <div className="text-center space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-mms-darkgray">Select Meeting Duration</h3>
              <p className="text-gray-600 text-sm sm:text-base">Choose a time that works best for you</p>
            </div>
            
            <div className="space-y-4 max-w-full">
              <Button className="w-full bg-mms-red hover:bg-red-600 text-white h-auto py-3 sm:py-4 text-base sm:text-lg" onClick={() => handleBookingClick('30min')}>
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Schedule 30-Minute Consultation
              </Button>
              
              <Button variant="outline" className="w-full border-mms-blue text-mms-blue hover:bg-mms-blue hover:text-white h-auto py-3 sm:py-4 text-base sm:text-lg" onClick={() => handleBookingClick('15min')}>
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Schedule 15-Minute Quick Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default BookingSection;
