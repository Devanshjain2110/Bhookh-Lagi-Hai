import Header from "./components/Header";

import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Contact } from "./components/Contact";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";

function App() {
  return (
    <div className=''>
      <Header />
      <Outlet />
    </div>
  );
}
const About = lazy(() => import('./components/About'));
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default App;
