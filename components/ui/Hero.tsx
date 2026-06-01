import Link from 'next/link'
import { memo } from 'react'

function Hero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Master Javascript Programming with JSLeetCode!
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-black">
                        Master JavaScript Interviews the Smart Way!
                    </h1>
                    <p className="mt-6 text-lg font-normal text-gray-600 sm:text-xl/8">
                        JSLeetCode is the best platform to help you enhance your JavaScript skills, expand your knowledge and prepare for technical interviews.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create Account
                        </Link>
                        <Link href="/" className="text-sm/6 font-semibold text-black hover:text-gray-700">
                            Get Started{" "}<span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Hero)