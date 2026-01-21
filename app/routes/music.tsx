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
            <h1 className={textColor}>
              Music - Tracks, projects, and notes about music. This page is a
              collection of recordings, experiments, and links to musical
              projects.
            </h1>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className={`text-lg font-bold ${textColor} mt-4`}>Fresta</h2>
              <p className={`${subtleColor} leading-relaxed mt-2`}>
                "Música para ouvir no escuro" — Fresta is an indie project
                (shown on the Taplink page) with Bandcamp, Spotify, YouTube, and
                social links collected below.
              </p>

              <div className="mt-3 space-y-2">
                <div className="flex gap-4 items-start">
                  <div className="w-36 flex-shrink-0">
                    <img
                      src="https://f4.bcbits.com/img/a2590122054_10.jpg"
                      alt="Fresta cover"
                      className="w-36 h-36 object-cover rounded-lg"
                      onError={(e: any) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className={subtleColor}>Links:</p>
                  <div className="flex gap-3 flex-wrap mt-2">
                    <a
                      href="https://fresta.bandcamp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkColor} hover:underline`}
                    >
                      Bandcamp
                    </a>
                    <a
                      href="https://open.spotify.com/artist/1l8ntEGLLYsO1OILPUAIAT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkColor} hover:underline`}
                    >
                      Spotify
                    </a>
                    <a
                      href="https://www.youtube.com/@somdafresta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkColor} hover:underline`}
                    >
                      YouTube
                    </a>
                    <a
                      href="https://instagram.com/somdafresta/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkColor} hover:underline`}
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className={`text-lg font-bold ${textColor}`}>Dum Brothers</h2>
              <p className={`${subtleColor} leading-relaxed mt-2`}>
                Dum Brothers begin as rock/power-duo featuring Raul Zanardo on
                guitar and vocals and Bruno Agnolett on drums. The band has
                released EPs and singles on Bandcamp and SoundCloud.
              </p>

              <div className="mt-3 space-y-2">
                <p className={subtleColor}>Notable releases:</p>

                <div className="flex gap-4 items-start mt-2">
                  <div className="w-32 flex-shrink-0">
                    <a
                      href="https://dumbrothers.bandcamp.com/album/pt-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src="https://f4.bcbits.com/img/a3398123664_10.jpg"
                        alt="Pt.1 cover"
                        className="w-32 h-32 object-cover rounded-lg"
                        onError={(e: any) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <p
                        className={`${subtleColor} text-sm mt-2 ${linkColor} hover:underline`}
                      >
                        Pt.1 — 2016
                      </p>
                    </a>
                  </div>

                  <div className="w-32 flex-shrink-0">
                    <a
                      href="https://dumbrothers.bandcamp.com/album/pt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src="https://f4.bcbits.com/img/a1773763440_16.jpg"
                        alt="Pt.2 cover"
                        className="w-32 h-32 object-cover rounded-lg"
                        onError={(e: any) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <p
                        className={`${subtleColor} text-sm mt-2 ${linkColor} hover:underline`}
                      >
                        Pt.2 — 2019
                      </p>
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <p className={`${subtleColor} mt-3`}>Links:</p>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="https://dumbrothers.bandcamp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkColor} hover:underline`}
                    >
                      Bandcamp
                    </a>
                    <a
                      href="https://soundcloud.com/dumbrothers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkColor} hover:underline`}
                    >
                      SoundCloud
                    </a>
                    <a
                      href="https://open.spotify.com/search/dum%20brothers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkColor} hover:underline`}
                    >
                      Spotify
                    </a>
                    <a
                      href="https://www.youtube.com/@DumBrothers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkColor} hover:underline`}
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
