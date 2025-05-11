import { useEffect } from "react";

const ReCAPTCHA = () => {
  const siteKey = import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ReCAPTCHA;
