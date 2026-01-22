import React from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Meta />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Links />
      {children}
      <ScrollRestoration />
      <Scripts />
    </>
  );
}

export default function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Handle GitHub Pages 404 redirects for client-side routing
    const handleRedirect = () => {
      try {
        const l = window.location;
        if (l.search && l.search[0] === "?") {
          const path = l.search.slice(1);
          if (path) {
            // Remove the leading slash if present and decode
            const cleanPath = path.startsWith("/") ? path.slice(1) : path;
            const decodedPath = cleanPath.replace(/~and~/g, "&");
            navigate("/" + decodedPath, { replace: true });
          }
        }
      } catch (error) {
        console.warn("Error handling redirect:", error);
      }
    };

    handleRedirect();
  }, [navigate]);

  const [isDark, setIsDark] = React.useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    } catch (error) {
      console.warn("Error initializing theme:", error);
    }
    return false;
  });

  React.useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", isDark ? "dark" : "light");
        if (isDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    } catch (error) {
      console.warn("Error setting theme:", error);
    }
  }, [isDark]);

  return (
    <Layout>
      <Outlet context={{ isDark, setIsDark }} />
    </Layout>
  );
}

export function HydrateFallback() {
  return (
    <Layout>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-text-primary">Loading...</div>
      </div>
    </Layout>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
