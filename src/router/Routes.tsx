import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Operators from "../components/pages/Operators";
import LogOptions from "../components/pages/LogOptions";
import Viewer from "../components/pages/Viewer";

const AppRouter = ({ fallBack }: { fallBack: React.ReactNode }) => {
  const router = createBrowserRouter(
    [
      { path: "/*", element: <Navigate to={"/ui/operators/brokengod"} /> },
      {
        path: "/ui",
        element: <LogOptions />,
      },
      {
        path: "/ui/operators",
        element: <Operators />,
      },
      {
        path: "/ui/operators/:user",
        element: <Viewer />,
        errorElement: (
          <>
            <h1>ERROR</h1>
          </>
        ),
      },
    ],
    {}
  );

  return <RouterProvider router={router} fallbackElement={fallBack} />;
};

export default AppRouter;
