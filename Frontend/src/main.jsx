import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, createBrowserRouter } from "react-router-dom";
import { RouterProvider, createRoutesFromElements } from "react-router";
import Home from "./pages/Home/Home.jsx";
import Summary from "./pages/generate/Summary.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Auth from "./Components/auth/Auth.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import { Toaster } from "./Components/ui/toaster.jsx"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="summary" element={<Summary />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="auth" element={<Auth />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
    <Toaster />
  </ClerkProvider>
);
