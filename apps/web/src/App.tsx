import { RouterProvider } from "react-router-dom";
import themeConfig from "./styles/themeConfig";
import { ConfigProvider } from "antd";
import router from "./routes";
import "./styles/reset.css";
import "./styles/global.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queries/queryClient";
import koKR from "antd/locale/ko_KR";
import ReCAPTCHA from "./components/ReCAPTCHA";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={koKR} theme={themeConfig}>
        <ReCAPTCHA>
          <RouterProvider router={router} />
        </ReCAPTCHA>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
