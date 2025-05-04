import { RouterProvider } from "react-router-dom";
import themeConfig from "./styles/themeConfig";
import { ConfigProvider } from "antd";
import router from "./routes";
import "./styles/reset.css";

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
