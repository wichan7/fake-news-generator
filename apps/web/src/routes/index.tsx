import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import RootLayout from "../components/layout/RootLayout";
import NewsWritePage from "../pages/News/Write";
import NewsDetailPage from "../pages/News/Detail";
import NewsHomePage from "../pages/News";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "news",
        element: <NewsHomePage />,
      },
      {
        path: "news/0",
        element: <NewsWritePage />,
      },
      {
        path: "news/:id",
        element: <NewsDetailPage />,
      },
    ],
  },
]);

export default router;
