'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import PWAPrompt from 'react-ios-pwa-prompt'

export default function PWADetector() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if the code is running in the browser
  
      const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
      };

      // Check if the device is in standalone mode
      const isInStandaloneMode = () => {
        return 'standalone' in window.navigator && window.navigator.standalone;
      };

      // If it's an iOS device and not in standalone mode, show the prompt
      if (isIos() && !isInStandaloneMode()) {
        setShowPrompt(true);
      }
   
  }, []);


  return (
    <div>
      {showPrompt && (
        <PWAPrompt
          timesToShow={3}
          promptOnVisit={1}
          copyTitle="Install My App"
        />
      )}
    </div>
  );
}