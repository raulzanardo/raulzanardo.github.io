import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Sun, Moon } from "lucide-react";

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

  return (
    <div
      className={`sticky top-0 z-50 ${
        isDark ? "bg-surface-dark" : "bg-gray-200"
      } shadow-md`}
    >
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-1 overflow-x-auto">
            {/* allow horizontal scroll for tabs on very small screens */}
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
              {isDark ? (
                <Moon size={20} className="text-white" fill="white" />
              ) : (
                <Sun size={20} className="text-black" fill="black" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
