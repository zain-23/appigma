"use client";
import Script from "next/script";

export const TawkChat = () => (
  <Script
    id="tawk-to"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/6902c2aca00437194fc244ff/1j8pcgsvf';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
        })();
      `,
    }}
  />
);
