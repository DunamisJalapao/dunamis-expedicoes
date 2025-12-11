"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "analytics-consent";
const GTM_ID = "GTM-W8PHTL9X";
const GA_ID = "G-SQ2R1B1GRS";
const AW_ID = "AW-113";

export function AnalyticsConsent() {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "true") {
      setConsentGiven(true);
    } else if (stored === "false") {
      setConsentGiven(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "true");
    setConsentGiven(true);
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "false");
    setConsentGiven(false);
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-lg p-4 sm:p-6"
          role="dialog"
          aria-labelledby="consent-title"
          aria-describedby="consent-description"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h2
                id="consent-title"
                className="font-bardon-stamp text-lg sm:text-xl mb-2 text-[#112126]"
              >
                Cookies e Privacidade
              </h2>
              <p
                id="consent-description"
                className="font-work-sans text-sm sm:text-base text-gray-700"
              >
                Utilizamos cookies para melhorar sua experiência e analisar o
                tráfego do site. Ao aceitar, você concorda com nossa política de
                privacidade.
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={handleReject}
                className="px-4 py-2 sm:px-6 sm:py-3 font-work-sans text-sm sm:text-base border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                aria-label="Rejeitar cookies"
              >
                Rejeitar
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 sm:px-6 sm:py-3 font-work-sans text-sm sm:text-base bg-[#E64A00] text-white rounded-lg hover:bg-[#CC3F00] transition-colors"
                aria-label="Aceitar cookies"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}

      {consentGiven === true && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
                w[l] = w[l] || []; w[l].push({
                  'gtm.start': new Date().getTime(), event: 'gtm.js'
                }); var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                  j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                  f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', '${GTM_ID}');`,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              aria-hidden="true"
            />
          </noscript>
          <Script
            id="gtag-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  send_page_view: true
                });
                gtag('config', '${AW_ID}');
              `,
            }}
          />
          <Script
            id="gtag-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="fbq-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '7037029349725824');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=7037029349725824&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}
