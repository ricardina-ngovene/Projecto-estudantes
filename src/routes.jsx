import { Contact } from "./pages/contact"
import { Home } from "./pages/home";
import { createBrowserRouter } from "react-router-dom";
import { Users} from "./pages/users"

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/users",
    element: <Users />,
  },
 
  ])