import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation(); // gives cuurent location like auth/login or admin/login

  console.log(location.pathname, isAuthenticated);
  //user is not authenticated and trying to access any shopping related page then redirect to login
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    // if user is not authenticated and the path is not login or register page user try to acess any other page without authenticated , redirect to login
    return <Navigate to="/auth/login" />;
  }

  //   if user is authenticated and user role is admin then direct to admin dashboard page or else shop/home page
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      // the user will come into picture that getting through props
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  //   if user is not admin and trying to access admin page then redirect  unauth-page
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  //   if user is admin and trying to access shoping page then redirect to admin dashboard
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  //if above nothing is satisfied then return children
  return <>{children}</>;
}

export default CheckAuth;
