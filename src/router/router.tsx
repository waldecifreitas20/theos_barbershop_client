import { createBrowserRouter } from "react-router";
import { App } from "../App";
import { CostumerSignUp } from "../views/CostumerSignUp";

export const Router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <CostumerSignUp />}
    ]
  },
]);