import React from 'react'
import SocialLinks from './social-icons'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme } = useTheme()

  //dark mode link styling for footer
  function darkModeLinkStyleTag(linkText, link) {
    return (
      <a
        className={`cursor-pointer hover:opacity-70 font-medium transition duration-300 ${
          theme === 'dark' ? 'link-styling-dark' : 'link-styling'
        }`}
        href={link}
        rel="noopener"
        target="_blank"
      >
        {linkText}
      </a>
    )
  }

  return (
    <div className="bottom-0 max-w-4xl mx-auto my-36 lazy-renderer">
      <footer>
        <div className="text-lg lg:text-xl text-inactive-gray">
          Inspiration from{' '}
          {darkModeLinkStyleTag('Shreyas Gupta', 'https://github.com/GLaDO8')}.
          The code is{' '}
          {darkModeLinkStyleTag(
            'open-source',
            'https://github.com/sahilpabale/portfolio',
          )}
          .
        </div>
        <SocialLinks />
        <div className="flex justify-start text-sm font-normal text-inactive-gray">
          © Sahil Pabale {new Date().getFullYear()}.
        </div>
      </footer>
    </div>
  )
}
