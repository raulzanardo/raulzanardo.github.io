import { Link, useOutletContext } from "react-router";
import { blogPosts, type BlogPost } from "../data/blogPosts.js";
import type { ThemeContext } from "../types/context";
import Header from "../components/Header";

export default function Blog() {
  const { isDark, setIsDark } = useOutletContext<ThemeContext>();

  const textColor = isDark ? "text-text-primary-dark" : "text-text-primary";
  const subtleColor = isDark
    ? "text-text-secondary-dark"
    : "text-text-secondary";
  const bgColor = isDark ? "bg-surface-dark" : "bg-surface";
  const borderColor = isDark ? "border-surface-dark" : "border-surface";
  const accentColor = isDark ? "text-primary-dark" : "text-primary";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "dark bg-background-dark" : "bg-gray-200"
      }`}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="max-w-3xl mx-auto px-5 py-5">
        <div className="space-y-6">
          <div>
            <h1 className={textColor}>
              Blog - Projects, experiments, and technical write-ups
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            {blogPosts.map((post: BlogPost) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="no-underline"
              >
                <div
                  className={`${bgColor} border ${borderColor} rounded-lg overflow-hidden hover:shadow-xl transition-all duration-200 cursor-pointer h-full flex flex-col`}
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <h2
                      className={`text-xl font-bold ${accentColor} mb-2 leading-tight`}
                    >
                      {post.title}
                    </h2>
                    <div
                      className={`flex gap-3 items-center mb-3 text-sm ${subtleColor}`}
                    >
                      <time>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    {post.image && (
                      <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden mb-8">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          onError={(e: any) => {
                            e.currentTarget.parentElement.style.display =
                              "none";
                          }}
                        />
                      </div>
                    )}
                    <p className={`${subtleColor} mb-4 flex-1 line-clamp-3`}>
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
