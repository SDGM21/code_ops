import { ReactNode } from "react";
import { useRedirect } from "../../hooks/useRedirect";
const ProtectedRoutes = (children: ReactNode, user: boolean = false) => {
  if (!user) {
    useRedirect("/");
  }
  return <>{children}</>;
};

export default ProtectedRoutes;
