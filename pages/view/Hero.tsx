import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ReactElement, useContext, useEffect, useRef } from 'react'
import FadeDown from '../../components/Animations/FadeDown'
import FadeRight from '../../components/Animations/FadeRight'
import FadeUp from '../../components/Animations/FadeUp'
import { renderCanvas } from '../../components/Animations/renderCanvas'
import { ScrollContext } from '../../components/Animations/ScrollObserver'
import styles from '@/styles/hero.module.scss'
import Typed from 'typed.js'
import { textConstant } from '@/components/data/constants'

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null)
  const typedText = useRef(null);
  const { scrollY } = useContext(ScrollContext)
  let progress = 0
  const { current: elContainer } = ref
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  useEffect(() => {
    renderCanvas();
    const typed = new Typed(typedText.current, {
      strings: ["👀 Bringing Your Vision to Life Through Code", " 🌱 Passionate Front-End Developer Creating Seamless Experiences ", "💞️ Responsive and Engaging Web Design"],
      typeSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, [])

  return (
    <div>
      <h1 className="sr-only">
      </h1>
      <motion.div
        className="relative flex h-[calc(100vh-120px)] items-center md:h-[calc(100vh-147px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <AnimatePresence>
          <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
            <div className="-mt-36">
              <div ref={ref} className="flex cursor-default flex-col space-y-2">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="col-span-2 row-start-3">
                    <FadeUp duration={0.6}>
                      <h1 className="text-4xl font-semibold sm:text-8xl md:text-7xl xl:text-8xl">
                        { textConstant.name }
                      </h1>
                    </FadeUp>
                    <FadeUp duration={0.6} delay={0.2}>
                      <div className="text-2xl font-medium opacity-80 sm:text-5xl md:text-5xl xl:text-4xl">
                        <span ref={typedText} />
                      </div>
                    </FadeUp>
                    <FadeRight duration={0.5} delay={0.8}>
                      <Link
                        href="/about"
                        className="px-2 pb-1 underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
                      >
                        Know about me &rarr;
                      </Link>
                    </FadeRight>
                  </div>
                  <div className="row-span-5">
                    <div className={styles.hero_img}>
                      <Image
                        src="/home.webp"
                        alt="Irfan Sk Home"
                        width={500}
                        height={500}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
                <div
                  role="presentation"
                  className="flex cursor-pointer flex-col items-center justify-center"
                  onClick={() => {
                    const intro = document.querySelector('#intro')
                    intro?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <FadeDown duration={1} delay={1.2}>
                    {/* <GiSeatedMouse size={20} /> */}
                  </FadeDown>
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </motion.div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  )
}