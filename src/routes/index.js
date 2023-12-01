import * as React from "react";
import App from "./app.routes";
import Auth from "./auth.routes";
import { useSelector } from "react-redux";

export default function Routes() {
  const user = useSelector((state) => state.user.user);

  return <>{user === "" ? <Auth /> : <App />}</>;
}
