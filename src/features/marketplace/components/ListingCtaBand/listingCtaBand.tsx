"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

export function OnboardingPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/30 transition-opacity"></div>

      <div
        className="relative bg-white rounded-[20px] shadow-2xl flex flex-col p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        style={{
          width: "420px",
          height: "530px",
          maxWidth: "100%",
          maxHeight: "calc(100vh - 32px)",
          fontFamily: "Inter, sans-serif",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[28px] font-semibold text-black tracking-[-1.2px] leading-[36px]">Coming Soon...</h2>
          <button
            onClick={onClose}
            className="focus:outline-none transition-transform active:scale-95 cursor-pointer"
            aria-label="Close dialog"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" fill="white"/>
              <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="#E6E8EA"/>
              <path d="M16.0005 17.0543L10.9275 22.1275C10.789 22.2658 10.6149 22.3367 10.4053 22.34C10.1958 22.3432 10.0185 22.2723 9.8735 22.1275C9.72867 21.9825 9.65625 21.8068 9.65625 21.6005C9.65625 21.3942 9.72867 21.2185 9.8735 21.0735L14.9468 16.0005L9.8735 10.9275C9.73517 10.789 9.66433 10.6149 9.661 10.4053C9.65783 10.1958 9.72867 10.0185 9.8735 9.8735C10.0185 9.72867 10.1942 9.65625 10.4005 9.65625C10.6068 9.65625 10.7825 9.72867 10.9275 9.8735L16.0005 14.9468L21.0735 9.8735C21.212 9.73517 21.3861 9.66433 21.5958 9.661C21.8053 9.65783 21.9825 9.72867 22.1275 9.8735C22.2723 10.0185 22.3448 10.4005 22.3448 10.4005C22.3448 10.6068 22.2723 10.7825 22.1275 10.9275L17.0543 16.0005L22.1275 21.0735C22.2658 21.212 22.3367 21.3861 22.34 21.5958C22.3432 21.8053 22.2723 21.9825 22.1275 22.1275C21.9825 22.2723 21.8068 22.3448 21.6005 22.3448C21.3942 22.3448 21.2185 22.2723 21.0735 22.1275L16.0005 17.0543Z" fill="#1C1B1F"/>
            </svg>
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/images/vendor-listings-hero/Agent_Preview.png"
              alt="Agent Preview"
              width={290}
              height={511}
              className="max-h-full w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export function ListingCtaBand({ companyName }: { companyName: string }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Force Fillout script to re-evaluate on component mount for SPA navigation
    const scriptId = 'fillout-embed-script';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="marketplace-cta-band">
      <h3>Ready to partner with {companyName}?</h3>
      <p>Join the partner program and start earning recurring commissions.</p>
      <div className="marketplace-cta-band__actions flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
        <button
          data-fillout-id="e7siaJuYm9us"
          data-fillout-embed-type="popup"
          data-fillout-dynamic-resize
          data-fillout-inherit-parameters
          data-fillout-popup-size="small"
          className="marketplace-cta-btn marketplace-cta-btn--primary w-full sm:w-auto flex justify-center text-center cursor-pointer"
        >
          Join the Community
        </button>
        <div>
          <button onClick={() => setShowPopup(!showPopup)} className="marketplace-cta-btn marketplace-cta-btn--secondary w-full sm:w-auto flex justify-center text-center">
            Talk to Onboarding Agent
          </button>
          <OnboardingPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </div>
      </div>
    </section>
  );
}

export function ListingHeroCtas() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Force Fillout script to re-evaluate on component mount for SPA navigation
    const scriptId = 'fillout-embed-script-hero';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="vendor-detail-preview-hero__actions flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 mt-4 sm:mt-6">
      <button
        data-fillout-id="e7siaJuYm9us"
        data-fillout-embed-type="popup"
        data-fillout-dynamic-resize
        data-fillout-inherit-parameters
        data-fillout-popup-size="small"
        className="marketplace-cta-btn marketplace-cta-btn--primary w-full sm:w-auto flex justify-center text-center cursor-pointer"
      >
        Join the Community
      </button>
      <div>
        <button onClick={() => setShowPopup(!showPopup)} className="marketplace-cta-btn marketplace-cta-btn--secondary w-full sm:w-auto flex justify-center text-center">
          Talk to Onboarding Agent
        </button>
        <OnboardingPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </div>
    </div>
  );
}
