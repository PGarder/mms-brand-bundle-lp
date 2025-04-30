
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, BarChart, Monitor, Globe, Book, Download } from "lucide-react";
import { trackButtonClick } from '@/utils/analytics';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useIsMobile } from "@/hooks/use-mobile";

const CountUpAnimation = ({ end, label, icon: Icon }: { end: number; label: string; icon: React.ElementType }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const interval = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-transform hover:scale-105">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-mms-red" />
      <div className="text-2xl sm:text-3xl font-bold mb-1">{count.toLocaleString()}</div>
      <div className="text-xs opacity-80">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const { toast } = useToast();
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const scrollToBooking = () => {
    document.getElementById('book-meeting')?.scrollIntoView({ behavior: 'smooth' });
    trackButtonClick('Build Your Brand', 'Hero Section');
  };

  const downloadOnePager = () => {
    try {
      setDownloadError(null);
      
      // Use the new Google Drive link
      const driveLink = 'https://drive.google.com/file/d/1gAddnmMxVQiKwDK7KYfvUXh_OXipDhN4/view?usp=sharing';
      
      // Open the link in a new tab
      window.open(driveLink, '_blank');
      
      // Show success toast
      toast({
        title: "One Pager Opened",
        description: "Your one-pager is opening in a new tab",
      });
      
      // Track analytics
      trackButtonClick('Download One Pager', 'Hero Section');
      
    } catch (error) {
      console.error('Error opening Google Drive link:', error);
      setDownloadError('Failed to open the file. Please try again later.');
      
      toast({
        title: "Open Failed",
        description: "There was a problem opening the one-pager",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="gradient-bg text-white py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Place Your Brand in Front of Qualified Buyers
              <span className="block text-mms-red mt-2">2025 Brand Awareness Bundle</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90">
              Reach an audience of qualified, active CNC machining shops and manufacturing professionals with high impact brand impressions across multiple content consumption channels.
            </p>
            
            {downloadError && (
              <Alert variant="destructive" className="mb-4">
                <AlertTitle>Download Error</AlertTitle>
                <AlertDescription>{downloadError}</AlertDescription>
              </Alert>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-mms-red hover:bg-red-600 text-white text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 w-full sm:w-auto"
                onClick={scrollToBooking}
              >
                Build Your Brand
              </Button>
              <Button 
                variant="white" 
                className="text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={downloadOnePager}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" /> View One Pager
              </Button>
            </div>
          </div>
          
          <div className="relative space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in">
              <CountUpAnimation end={87500} label="Magazine Subscribers" icon={Users} />
              <CountUpAnimation end={50000} label="Monthly Visitors" icon={TrendingUp} />
              <CountUpAnimation end={43000} label="Email Subscribers" icon={BarChart} />
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-48 sm:w-72 h-48 sm:h-72 bg-mms-blue rounded-full opacity-20 blur-3xl"></div>
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 sm:p-6 mms-shadow">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-mms-red flex items-center justify-center mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg sm:text-xl">Multi-Channel Approach</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start">
                    <Monitor className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-mms-red mt-1 flex-shrink-0" />
                    <span>Web display ad package (90 days)</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-mms-red mt-1 flex-shrink-0" />
                    <span>Offsite display retargeting (90 days)</span>
                  </li>
                  <li className="flex items-start">
                    <Book className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-mms-red mt-1 flex-shrink-0" />
                    <span>Magazine display advertisements (3x print)</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-mms-red mt-1 flex-shrink-0" />
                    <span>Analytics dashboard/ad tracker</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
