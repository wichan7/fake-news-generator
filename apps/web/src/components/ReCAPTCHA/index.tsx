import { useEffect, useState } from "react";

const ReCAPTCHA = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);
  const siteKey = import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY || "";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setReady(true);
        });
      } else {
        console.error("grecaptcha failed to load");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return ready ? children : undefined;
};

export default ReCAPTCHA;
