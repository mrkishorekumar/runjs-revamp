import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

function Hero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
                <Image width={112} height={16} src="/users.webp" alt="Users" className='mx-auto mb-4' />
                <p className="mb-4 text-base text-gray-700 text-center">{`{ Trusted by 1K+ developers }`}</p>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-4 py-1 text-sm/6 text-black ring-1 ring-black">
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
                            href="/login"
                            className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-600"
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