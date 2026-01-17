import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const tabs = ["Home", "Blog", "Music"];
  const paths = ["/", "/blog", "/music"];

  const activeTab = paths.indexOf(location.pathname);

  const Sun = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" stroke="black" strokeWidth="2" />
      <line x1="12" y1="21" x2="12" y2="23" stroke="black" strokeWidth="2" />
      <line
        x1="4.22"
        y1="4.22"
        x2="5.64"
        y2="5.64"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="18.36"
        y1="18.36"
        x2="19.78"
        y2="19.78"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="1" y1="12" x2="3" y2="12" stroke="black" strokeWidth="2" />
      <line x1="21" y1="12" x2="23" y2="12" stroke="black" strokeWidth="2" />
      <line
        x1="4.22"
        y1="19.78"
        x2="5.64"
        y2="18.36"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="18.36"
        y1="5.64"
        x2="19.78"
        y2="4.22"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );

  const Moon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <div
      className={`sticky top-0 z-50 ${
        isDark ? "bg-surface-dark" : "bg-gray-200"
      } shadow-md`}
    >
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-1">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => navigate(paths[index])}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === index
                    ? `${
                        isDark
                          ? "text-primary-dark border-b-2 border-primary-dark"
                          : "text-primary border-b-2 border-primary"
                      }`
                    : `${
                        isDark
                          ? "text-text-primary-dark hover:text-primary-dark"
                          : "text-text-secondary hover:text-primary"
                      }`
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${isDark ? "hover:bg-surface-dark" : "hover:bg-surface"}`}
              title="Toggle theme"
              style={{
                backgroundColor: isDark ? "transparent" : "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {isDark ? <Moon /> : <Sun />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
