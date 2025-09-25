import { createBrowserRouter } from "react-router";
import { App } from "../App";
import { CostumerSignUpView } from "../views/CostumerSignUpView";
import { ServiceScheduleView } from "../views/ServiceScheduleView";
import { HomeView } from "../views/HomeView";
import { LoginView } from "../views/LoginView";

export const Router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <HomeView /> },
      { path: "/login", element: <LoginView /> },
      { path: "/nova-conta", element: <CostumerSignUpView /> },
      { path: "/agendamento", element: <ServiceScheduleView /> },
    ]
  },
]);