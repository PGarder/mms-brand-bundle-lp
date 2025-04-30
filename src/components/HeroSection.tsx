import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, BarChart, Monitor, Globe, Book } from "lucide-react";
import { trackButtonClick } from '@/utils/analytics';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
    <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-transform hover:scale-105">
      <Icon className="w-8 h-8 mb-2 text-mms-red" />
      <div className="text-3xl font-bold mb-1">{count.toLocaleString()}</div>
      <div className="text-xs opacity-80">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const { toast } = useToast();
  const [downloadError, setDownloadError] = useState<string | null>(null);
  
  const scrollToBooking = () => {
    document.getElementById('book-meeting')?.scrollIntoView({ behavior: 'smooth' });
    trackButtonClick('Build Your Brand', 'Hero Section');
  };

  const downloadOnePager = () => {
    try {
      setDownloadError(null);
      
      // Create a temporary link with the image we want to download
      const imageUrl = '/lovable-uploads/98ab018c-ec4c-49c7-b69a-81967a6829a4.png';
      
      // Use fetch to get the image as a blob
      fetch(imageUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then(blob => {
          // Create object URL from blob
          const blobUrl = window.URL.createObjectURL(blob);
          
          // Create link element
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = 'MMS-2025-Brand-Awareness-Bundle.png';
          
          // Append to document, click and clean up
          document.body.appendChild(link);
          link.click();
          
          // Clean up
          setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
          }, 100);
          
          // Show success toast
          toast({
            title: "Download Started",
            description: "Your one-pager is being downloaded",
          });
          
          // Track analytics
          trackButtonClick('Download One Pager', 'Hero Section');
        })
        .catch(error => {
          console.error('Download error:', error);
          setDownloadError('Failed to download file. Please try again later.');
          
          toast({
            title: "Download Failed",
            description: "There was a problem downloading the file",
            variant: "destructive",
          });
        });
    } catch (error) {
      console.error('Download setup error:', error);
      setDownloadError('Failed to download file. Please try again later.');
      
      toast({
        title: "Download Failed",
        description: "There was a problem downloading the file",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="gradient-bg text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
              Place Your Brand in Front of Qualified Buyers
              <span className="block text-mms-red mt-2">2025 Brand Awareness Bundle</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
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
                className="bg-mms-red hover:bg-red-600 text-white text-lg py-6 px-8"
                onClick={scrollToBooking}
              >
                Build Your Brand
              </Button>
              <Button 
                variant="white" 
                className="text-lg py-6 px-8"
                onClick={downloadOnePager}
              >
                Download One Pager
              </Button>
            </div>
          </div>
          
          <div className="relative space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 animate-fade-in">
              <CountUpAnimation end={87500} label="Magazine Subscribers" icon={Users} />
              <CountUpAnimation end={50000} label="Monthly Visitors" icon={TrendingUp} />
              <CountUpAnimation end={43000} label="Email Subscribers" icon={BarChart} />
            </div>
            <div className="relative">
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
                    <Monitor className="w-5 h-5 mr-2 text-mms-red mt-1" />
                    <span>Web display ad package (90 days)</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="w-5 h-5 mr-2 text-mms-red mt-1" />
                    <span>Offsite display retargeting (90 days)</span>
                  </li>
                  <li className="flex items-start">
                    <Book className="w-5 h-5 mr-2 text-mms-red mt-1" />
                    <span>Magazine display advertisements (3x print)</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="w-5 h-5 mr-2 text-mms-red mt-1" />
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
