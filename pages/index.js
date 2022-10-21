import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Layout from '@/components/layout'
export default function Index() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const rightArrowLink = `https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=${
    theme === 'dark' ? '000' : 'fff'
  }`

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  const twitterSvgTagLink = `https://s2.svgbox.net/social.svg?ic=twitter&color=${
    theme === 'light' ? '000' : 'fff'
  }`

  //dark mode link styling for links
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
    <>
      <Layout>
        <Head>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:site" content="@sahilpabale"></meta>
          <meta property="twitter:title" content="Sahil Pabale"></meta>
          <meta property="twitter:url" content="https://sahil.lol" />
          <meta
            property="twitter:description"
            content="I'm Sahil Pabale, a 19 year old Backend Developer from India."
          ></meta>
          <meta
            property="og:description"
            content="I'm Sahil Pabale, a 19 year old Backend Developer from India."
          ></meta>
          <meta
            name="description"
            content="I'm Sahil Pabale, a 19 year old Backend Developer from India."
          ></meta>
          <title>Sahil Pabale | Portfolio</title>
          <meta property="og:title" content="Sahil Pabale | Portfolio"></meta>
        </Head>
        {/* <Fade bottom> */}
        <div className="mt-6 mb-12 lg:mt-24">
          <p className="mb-12 text-3xl font-semibold text-left text-black md:text-4xl lg:text-6xl dark:text-white">
            Hey, I'm Sahil.
          </p>{' '}
          <p className="mt-8 text-xl font-normal text-left text-black md:text-xl lg:text-xl dark:text-white">
            I'm a {new Date().getFullYear() - 2002} year old backend engineer
            who loves to build Scalable APIs and Databases. Currently building
            the architecture and network of autonomous drones at{' '}
            {darkModeLinkStyleTag('Airbound', 'https://airbound.co/')}.
            <br /> <br />
            Stack: Rust, Typescript, NodeJS, Java, MongoDB, Postgres, Firebase,
            Docker, K8s, AWS
          </p>
          <div className="flex mt-2 space-x-4">
            <Link href="/resume.pdf" passHref={true}>
              <button className="flex items-center p-4 mt-4 font-medium text-white transition duration-300 bg-black border-2 border-black cursor-pointer dark:bg-white dark:text-black rounded-xl hover:opacity-80">
                <div className="pr-2">Resume</div>
                <div>
                  <img
                    src={rightArrowLink}
                    width="20"
                    height="20"
                    alt="right arrow icon"
                  />
                </div>
              </button>
            </Link>

            <Link href="https://twitter.com/sahilpabale" passHref={true}>
              <button className="flex items-center px-4 py-2 mt-4 text-black transition duration-300 transform border-2 border-black cursor-pointer dark:border-white dark:text-white rounded-xl hover:opacity-70">
                <div className="pr-2">
                  <img
                    src={twitterSvgTagLink}
                    width="22"
                    height="22"
                    alt="twitter logo"
                  />
                </div>
                <div className="font-normal"> Say hi on Twitter.</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-24">
          <p className="text-4xl font-semibold">Work Experience</p>
          {/* airbound */}
          <div className="flex flex-col md:flex-row items-center p-4 border-gray-400 dark:border-gray-700 border-2 rounded-lg mt-8">
            <div>
              <p className="font-semibold text-3xl">Airbound</p>
              <p className="text-gray-500 text-lg pb-2 dark:text-gray-400">
                Backend Engineer (Aug 2022 - Present)
              </p>
              <p>
                Solving healthcare problems in rural areas with the help of
                Automated Drones at Airbound.{' '}
              </p>
              <div className="flex flex-row space-x-2 pt-3">
                <p className="text-md">Skills:</p>
                <button
                  type="button"
                  className="rounded-full text-white bg-amber-600 px-3 dark:bg-amber-500 dark:text-black"
                >
                  Rust
                </button>
                <button
                  type="button"
                  className="rounded-full text-white bg-indigo-500 px-3 dark:bg-indigo-300 dark:text-black"
                >
                  Mavlink
                </button>
                <button
                  type="button"
                  className="rounded-full text-white bg-sky-500 px-3 dark:bg-sky-200 dark:text-black"
                >
                  PostgreSQL
                </button>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-12 cursor-pointer flex items-center">
              <Link title="Airbound.co" href="https://airbound.co">
                <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                  <Image
                    width={360}
                    height={200}
                    src="https://res.cloudinary.com/sahilpabale/image/upload/v1666352031/airbound_img_ma9bqg.webp"
                    layout="fixed"
                    objectFit="cover"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* investmint */}
          <div className="flex flex-col md:flex-row items-center p-4 border-gray-400 dark:border-gray-700 border-2 rounded-lg mt-8">
            <div>
              <p className="font-semibold text-3xl">Investmint</p>
              <p className="text-gray-500 text-lg pb-2 dark:text-gray-400">
                Software Engineer (Jun 2022 - Aug 2022)
              </p>
              <p>
                1. Multi Broker Integration Library for the Core API <br /> 2.
                Integration of Trading brokers like Zerodha, Dhan and so on to
                ensure smooth trade execution on Investmint App
              </p>
              <div className="flex flex-row space-x-2 pt-3">
                <p className="text-md">Skills:</p>
                <button
                  type="button"
                  className="rounded-full text-white bg-green-500 px-3 dark:bg-green-300 dark:text-black"
                >
                  NodeJS
                </button>
                <button
                  type="button"
                  className="rounded-full text-white bg-sky-500 px-3 dark:bg-sky-200 dark:text-black"
                >
                  PostgreSQL
                </button>
                <button
                  type="button"
                  className="rounded-full text-white bg-blue-500 px-3 dark:bg-blue-300 dark:text-black"
                >
                  Typescript
                </button>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-12 cursor-pointer flex items-center">
              <Link title="Investmint" href="https://investmint.club">
                <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                  <Image
                    width={360}
                    height={200}
                    src="https://res.cloudinary.com/sahilpabale/image/upload/v1666349771/investmint_xfq6kz.webp"
                    layout="fixed"
                    className="object-none bg-white"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* career leap */}
          <div className="flex flex-col md:flex-row items-center p-4 border-gray-400 dark:border-gray-700 border-2 rounded-lg mt-8">
            <div>
              <p className="font-semibold text-3xl">Career Leap</p>
              <p className="text-gray-500 text-lg pb-2 dark:text-gray-400">
                Backend Engineer (Sep 2021 - Dec 2021)
              </p>
              <p>
                Worked on: <br />
                1. Migrating data from Firestore to MongoDB.
                <br /> 2. Automating Notifications based on data triggers in
                Functions.{''}
              </p>
              <div className="flex flex-row space-x-2 pt-3">
                <p className="text-md">Skills:</p>
                <button
                  type="button"
                  className="rounded-full text-white bg-green-500 px-3 dark:bg-green-300 dark:text-black"
                >
                  NodeJS
                </button>
                <button
                  type="button"
                  className="rounded-full text-white bg-emerald-500 px-3 dark:bg-emerald-200 dark:text-black"
                >
                  MongoDB
                </button>
                <button
                  type="button"
                  className="rounded-full text-white bg-yellow-500 px-3 dark:bg-yellow-300 dark:text-black"
                >
                  Javascript
                </button>
                <button
                  type="button"
                  className="rounded-full text-white bg-teal-500 px-3 dark:bg-teal-300 dark:text-black"
                >
                  Firebase
                </button>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-12 cursor-pointer flex items-center">
              <Link title="careerleap.io" href="https://careerleap.io">
                <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                  <Image
                    width={360}
                    height={200}
                    src="https://images-ext-1.discordapp.net/external/ye_3kY2yVKsGbk-iMQsDZxllq9A7qhq52As7RXPB5G4/https/dl.airtable.com/.attachmentThumbnails/4be975f4051fafda3cbd9e611531aaa0/ecd4603d"
                    layout="fixed"
                    className="object-none bg-white"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
