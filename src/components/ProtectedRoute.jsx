import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  return <div>{user ? children : <Navigate to={"/"} />}</div>;
};
