import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page404 from "./error-page/page404";
import Weather from "./dashboard/Weather";
import Layout from "./dashboard/Layout";
import MapWeather from "./dashboard/MapWeather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Weather />,
      },
      {
        path: '/weather',
        element: <Weather />,
      },
      {
        path: "/weather-map",
        element: <MapWeather />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
