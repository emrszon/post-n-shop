import { ReactElement } from "react";
import CreateUserPage from "../views/CreateUserView";
import NotFoundPage from "../views/Error404View";
import LoginPage from "../views/LoginView";
import InsidePrivatePage from "../views/InsideView";

export interface Route{ path: string; label: string; element: ({}:{})=>JSX.Element; isPrivate: boolean;};

export const routes:{PRIVATE:Route, LOGIN:Route, CREATE_USERS:Route, NOT_FOUND:Route,} = {
  LOGIN:{
    path: "/ingreso",
    label:"Ingreso",
    element: LoginPage,
    isPrivate: false,
  },
  PRIVATE:{
    path: "/private",
    label:"Private",
    element: InsidePrivatePage,
    isPrivate: true,
  },
  CREATE_USERS:{
    path: "/registro",
    label:"Registrar",
    element: CreateUserPage,
    isPrivate: false,
  },
  NOT_FOUND:{
    path: "*",
    label: "Error 404",
    element: NotFoundPage,
    isPrivate: false,
  }
};