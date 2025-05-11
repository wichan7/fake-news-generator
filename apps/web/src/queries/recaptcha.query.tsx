import { useMutation } from "@tanstack/react-query";
import ReCAPTCHAService from "../services/reCAPTCHA.service";

const useRecaptchaQuery = () => {
  const recaptchaService = new ReCAPTCHAService();

  const useVerify = () => {
    return useMutation({
      mutationFn: () => recaptchaService.verify(),
    });
  };

  return { useVerify };
};

export default useRecaptchaQuery;
