import React from 'react'

export default function Home({ isDark }) {
  const textColor = isDark ? 'text-text-primary-dark' : 'text-text-primary'
  const subtleColor = isDark ? 'text-text-secondary-dark' : 'text-text-secondary'
  const linkColor = isDark ? 'text-primary-dark' : 'text-primary'

  return (
    <div className="space-y-6">
      <div>
        <h1 className={textColor}>Raul Zanardo</h1>
        <p className={subtleColor}>
          Developer & Engineer — Building digital products with React, Flutter, and modern web technologies.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className={`text-lg font-bold ${textColor}`}>About</h2>
          <p className={`${subtleColor} leading-relaxed text-justify`}>
            Frontend, Mobile, and Backend Developer with over 5 years of experience creating digital products for web and mobile. 
            Specialist in Flutter, React, and NestJS, with strong focus on UX/UI, performance, and code quality.
          </p>
        </div>

        <div>
          <h2 className={`text-lg font-bold ${textColor}`}>Contact</h2>
          <div className="space-y-2">
            <p className={subtleColor}>
              <a href="mailto:raulzanardo@gmail.com" className={`${linkColor} hover:underline`}>
                raulzanardo@gmail.com
              </a>
            </p>
            <p className={subtleColor}>
              <a 
                href="https://github.com/raulzanardo" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${linkColor} hover:underline`}
              >
                github.com/raulzanardo
              </a>
            </p>
            <p className={subtleColor}>
              <a 
                href="https://www.linkedin.com/in/raulzanardo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${linkColor} hover:underline`}
              >
                linkedin.com/in/raulzanardo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
