import Head from 'next/head'
import React, {useState} from 'react'
import { navLinks } from '@/components/data/constants'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import localFont from 'next/font/local'
import Modal from "./Modal";
import { textConstant } from '@/components/data/constants'

const brandFont = localFont({ src: '../../public/static/Agustina.woff' })

const Header = () => {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);

  const keydownHandler = (e: {
    key: string,
    ctrlKey: boolean, preventDefault: () => void
}) => {
    if(e.key === 'k' || e.key === 'K' && e.ctrlKey) {
      e.preventDefault();
      setShowModal(true);
    }
  };
  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    }
  }, []);


  return (
    <>
      <Head>
        <title>{ textConstant.name }</title>        
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="Irfan Sk" />
        <meta name="author" content="Irfan Sk" />
        <meta name="designer" content="Irfan Sk" />
        <meta name="publisher" content="Irfan Sk" />
        <meta name="language" content="english" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Irfan Sk,JavaScript Developer,Irfan Sk Personal Website,Computer Engineer,Engineer,Developers,Software Engineer"
        />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta
          name="description"
          content="I am Irfan Sk. I am a Software Engineer. I love to build web application for everyone & learn about new technologies. I am a quick learner."
        />
        <meta
          name="copyright"
          content="© Irfan Sk 2018-2024. All Rights Reserved."
        />

        {/* Optional Meta Tags */}
        <meta name="web_author" content="Irfan Sk" />
        <meta name="rating" content="general" />
        <meta name="rating" content="safe for kids" />
        <meta name="subject" content="Personal" />
        <meta name="abstract" content="Irfan Sk,A full stack web developer." />
        <meta name="city" content="West Bengal" />
        <meta name="country" content="india" />
        <meta name="distribution" content="global" />
        <meta name="classification" content="Irfan Sk,A full stack web developer." />

        {/* Meta tags for social site */}
        <meta property="og:title" content="Irfan Sk" />
        <meta property="og:site_name" content="Irfan Sk" />
        <meta property="og:url" content="https://irfanskit.github.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.jpg" />
        <meta name="og:image:alt" content="Irfan Sk" />
        <meta
          property="og:description"
          content="I am Irfan Sk. I am a Software Engineer. I love to build web application for everyone & learn about new technologies. I am a quick learner."
        />

        {/* httpEquiv Tags */}
        <meta httpEquiv="Content-Style-Type" content="text/css" />
        <meta httpEquiv="Content-Script-Type" content="text/javascript" />

        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <header className="z-40 bg-transparent py-5 md:py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link href="/" className="flex items-center justify-between" aria-label="Home">
              <div
                className={classNames(
                  'horizontal-underline hidden text-3xl font-extrabold sm:block',
                  {
                    'horizontal-underline': router.pathname === '/',
                  }
                )}
              >
                <div  className={brandFont.className} style={{fontWeight: 500}}>
                  {'<Irfan Sk />'}
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-base leading-5">
            <div className="hidden space-x-5 sm:flex">
              {navLinks.map(({ title, href }) => {
                const active = router.pathname.includes(href)
                return (
                  <Link
                    key={title}
                    href={href}
                    className={classNames('horizontal-underline text-base', {
                      'horizontal-underline-active': active,
                    })}
                    aria-label={title}
                  >
                    <span className="font-bold tracking-wide text-900">
                      {title}
                    </span>
                  </Link>
                )
              })}
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <button
                  className="px-2 py-1 bg-primary-600 rounded-md"
                  type="button"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  ⌘ + K
                </button>
                {showModal && <Modal setOpenModal={setShowModal} />}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;