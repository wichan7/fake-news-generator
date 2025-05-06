import { RouterProvider } from "react-router-dom";
import themeConfig from "./styles/themeConfig";
import { ConfigProvider } from "antd";
import router from "./routes";
import "./styles/reset.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queries/queryClient";
import koKR from "antd/locale/ko_KR";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={koKR} theme={themeConfig}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
