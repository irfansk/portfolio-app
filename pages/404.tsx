// import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const FourZeroFour = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col items-start justify-start md:mt-40 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we could not find this page.
        </p>
        <p className="mb-8">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        {/* <Link href="/">
          <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 focus:outline-none hover:bg-blue-700 dark:hover:bg-blue-500">
            Back to homepage
          </button>
        </Link> */}
        <button type="button" className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 focus:outline-none hover:bg-blue-700 dark:hover:bg-blue-500" onClick={() => router.back()}>
          Click here to go back
        </button>
      </div>
    </div>
  )
}

export default FourZeroFour;