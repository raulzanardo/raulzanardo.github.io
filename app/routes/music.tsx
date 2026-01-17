import { useOutletContext } from "react-router";
import type { ThemeContext } from "../types/context";
import Header from "../components/Header";

export function meta() {
  return [{ title: "Music — Raul Zanardo" }];
}

export default function Music() {
  const { isDark, setIsDark } = useOutletContext<ThemeContext>();

  const textColor = isDark ? "text-text-primary-dark" : "text-text-primary";
  const subtleColor = isDark
    ? "text-text-secondary-dark"
    : "text-text-secondary";
  const linkColor = isDark ? "text-primary-dark" : "text-primary";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "dark bg-background-dark" : "bg-background"
      }`}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="max-w-3xl mx-auto px-5 py-5">
        <div className="space-y-6">
          <div>
            <h1 className={textColor}>Music</h1>
            <p className={subtleColor}>
              Tracks, projects, and notes about music. This page is a collection
              of recordings, experiments, and links to musical projects.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className={`text-lg font-bold ${textColor}`}>Recent</h2>
              <p className={`${subtleColor} leading-relaxed`}>No items yet.</p>
            </div>

            <div>
              <h3 className={`text-sm font-semibold ${textColor} mt-2`}>
                Where to listen
              </h3>
              <p className={subtleColor}>
                <a href="#" className={`${linkColor} hover:underline`}>
                  Soundcloud / Bandcamp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
