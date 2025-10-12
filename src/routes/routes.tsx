import { createBrowserRouter } from "react-router";
import { HomePage } from "../features/costumer/home";
import { LoginPage } from "../features/costumer/login";
import { SignUpPage } from "../features/costumer/signUp";
import { AppointmentPage } from "../features/costumer/appointment";

export const Router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/entrar", element: <LoginPage /> },
  { path: "/nova-conta", element: <SignUpPage /> },
  { path: "/agendamento", element: <AppointmentPage /> },
]);