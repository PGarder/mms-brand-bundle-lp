
/**
 * Analytics utility functions for tracking user interactions
 */

// Track button clicks
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  console.log(`Button clicked: ${buttonName} in ${buttonLocation}`);
  
  // Send to analytics provider (if available)
  if (window.gtag) {
    // For Google Analytics 4
    window.gtag('event', 'button_click', {
      'button_name': buttonName,
      'button_location': buttonLocation,
      'timestamp': new Date().toISOString()
    });
  }
};

// Track page view
export const trackPageView = (pageName: string) => {
  console.log(`Page viewed: ${pageName}`);
  
  // Send to analytics provider (if available)
  if (window.gtag) {
    // For Google Analytics 4
    window.gtag('event', 'page_view', {
      'page_title': document.title,
      'page_location': window.location.href,
      'page_name': pageName,
      'timestamp': new Date().toISOString()
    });
  }
};

// Track section visibility
export const trackSectionView = (sectionId: string, sectionName: string) => {
  console.log(`Section viewed: ${sectionName} (${sectionId})`);
  
  // Send to analytics provider (if available)
  if (window.gtag) {
    // For Google Analytics 4
    window.gtag('event', 'section_view', {
      'section_id': sectionId,
      'section_name': sectionName,
      'timestamp': new Date().toISOString()
    });
  }
};
