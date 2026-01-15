import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function Blog({ isDark }) {
  const textColor = isDark ? "text-text-primary-dark" : "text-text-primary";
  const subtleColor = isDark
    ? "text-text-secondary-dark"
    : "text-text-secondary";
  const bgColor = isDark ? "bg-surface-dark" : "bg-surface";
  const borderColor = isDark ? "border-surface-dark" : "border-surface";
  const accentColor = isDark ? "text-primary-dark" : "text-primary";

  return (
    <div className="space-y-6">
      <div>
        <h1 className={textColor}>Blog</h1>
        <p className={subtleColor}>
          Projects, experiments, and technical write-ups
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="no-underline"
          >
            <div
              className={`${bgColor} border ${borderColor} rounded-lg overflow-hidden hover:shadow-xl transition-all duration-200 cursor-pointer h-full flex flex-col p-4`}
              style={{
                transform: "translateY(0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Post content */}
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
                </div>{" "}
                {/* Post image */}
                {post.image && (
                  <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.parentElement.style.display = "none";
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
  );
}
