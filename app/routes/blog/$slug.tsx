import { useParams, Link, useOutletContext } from "react-router";
import { blogPosts, type BlogPost } from "../../data/blogPosts.js";
import Header from "../../components/Header";

export default function BlogPost() {
  const { slug } = useParams();
  const { isDark, setIsDark }: any = useOutletContext();

  const post = blogPosts.find((p: BlogPost) => p.slug === slug);
  if (!post) {
    return (
      <div
        className={`min-h-screen ${
          isDark ? "dark bg-background-dark" : "bg-background"
        }`}
      >
        <Header isDark={isDark} setIsDark={setIsDark} />
        <div className="max-w-3xl mx-auto px-5 py-5">
          <Link to="/blog">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const textColor = isDark ? "text-text-primary-dark" : "text-text-primary";
  const subtleColor = isDark
    ? "text-text-secondary-dark"
    : "text-text-secondary";
  const accentColor = isDark ? "text-primary-dark" : "text-primary";
  const bgCodeColor = isDark ? "bg-gray-900" : "bg-gray-200";

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: any[] = [];
    let inCodeBlock = false;
    let codeBlockLines: string[] = [];

    lines.forEach((line, idx) => {
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockLines = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <pre
              key={`code-${idx}`}
              className={`${bgCodeColor} p-4 rounded overflow-auto mb-4`}
            >
              <code className={subtleColor}>{codeBlockLines.join("\n")}</code>
            </pre>
          );
          codeBlockLines = [];
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockLines.push(line);
        return;
      }

      if (line.startsWith("# ") && !line.startsWith("## ")) {
        elements.push(
          <h1 key={idx} className={`text-4xl font-bold mt-8 mb-4 ${textColor}`}>
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith("## ") && !line.startsWith("### ")) {
        elements.push(
          <h2 key={idx} className={`text-3xl font-bold mt-6 mb-3 ${textColor}`}>
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={idx} className={`text-2xl font-bold mt-5 mb-2 ${textColor}`}>
            {line.slice(4)}
          </h3>
        );
      } else if (line.includes("**")) {
        const parts = line.split("**");
        const rendered = parts.map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="font-bold">
              {part}
            </strong>
          ) : (
            part
          )
        );
        elements.push(
          <p key={idx} className={`mb-3 ${subtleColor}`}>
            {rendered}
          </p>
        );
      } else if (line.includes("[") && line.includes("](")) {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts: any[] = [];
        let lastIndex = 0;
        let match: RegExpExecArray | null;
        while ((match = linkRegex.exec(line)) !== null) {
          if (match.index > lastIndex)
            parts.push(line.substring(lastIndex, match.index));
          parts.push(
            <a
              key={match.index}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className={`${accentColor} hover:underline`}
            >
              {match[1]}
            </a>
          );
          lastIndex = linkRegex.lastIndex;
        }
        if (lastIndex < line.length) parts.push(line.substring(lastIndex));
        elements.push(
          <p key={idx} className={`mb-3 ${subtleColor}`}>
            {parts}
          </p>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={idx} className={`ml-6 mb-2 ${subtleColor} list-disc`}>
            {line.slice(2)}
          </li>
        );
      } else if (line.trim() === "") {
        elements.push(<br key={idx} />);
      } else if (line.trim().length > 0) {
        elements.push(
          <p key={idx} className={`mb-3 ${subtleColor}`}>
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div
      className={`min-h-screen ${
        isDark ? "dark bg-background-dark" : "bg-background"
      }`}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="max-w-3xl mx-auto px-5 py-5">
        <article className="space-y-6">
          <Link
            to="/blog"
            className={`inline-block ${accentColor} mb-8 text-sm font-medium hover:underline transition-transform hover:-translate-x-1`}
          >
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className={`text-5xl font-bold mb-2 ${textColor}`}>
              {post.title}
            </h1>
            <div
              className={`flex flex-row gap-4 items-center mb-6 ${subtleColor} text-sm justify-between`}
            >
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {post.github && (
                <a
                  href={post.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all border-2 ${isDark ? "border-primary-dark text-primary-dark hover:bg-primary-dark hover:bg-opacity-10" : "border-primary text-primary hover:bg-primary hover:bg-opacity-10"}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="ml-2">View on GitHub</span>
                </a>
              )}
            </div>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full  object-cover rounded-lg mb-8"
                onError={(e: any) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
          </header>

          <div className="text-lg leading-relaxed">
            {renderContent(post.content)}
          </div>

          {post.images && post.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {post.images.map((imgUrl: string, i: number) => (
                <img
                  key={i}
                  src={imgUrl}
                  alt={`${post.title} - image ${i + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e: any) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
