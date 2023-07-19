import { createBrowserRouter } from "react-router-dom";
import { Home, Type, Types } from "./pages";
import { NotFound } from "./pages/errors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/types",
    element: <Types />,
    children: [
      {
        path: ":name",
        element: <Type />,
      },
    ],
  },
]);

export default router;
